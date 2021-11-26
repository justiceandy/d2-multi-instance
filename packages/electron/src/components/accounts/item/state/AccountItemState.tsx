// @ts-nocheck
import { assign, createMachine, spawn, send } from 'xstate';
import AccountItemServices from './AccountItemStateServices';
import AccountItemLaunchMachine from './AccountItemLaunchState';
import AccountItemAuthMachine from './AccountItemAuthState';

/*
    State Machine for an Instance of AccountItem component, Parent Manages que for multiple instances
        - See Xstate vsc plugin for visual
        - Seperate Child Machines for Bnet Auth & Launch Flow

      - The AccountItem component has alot of state management to prevent multiple accounts from launching
*/
export default function AccountItemStateMachine({ index = 0,  QueMachine }) {
    return createMachine({
        id: `accountItem${index}`,
        initial: 'idle',
        context: {
          retries: 0,
          tooltip: "",
          authenticating: false,
          launching: false,
          running: false,
        },
        states: {
          // Default State after Load
          idle: {
            on: {
              LAUNCH: {
                target: 'starting',
                actions: assign({
                    authenticating: false,
                    launching: false,
                    running: false,
                    tooltip:  'Locking'
                }),
              } ,
              AUTH: {
                target: 'authenticate',
                actions: assign({
                    authenticating: true,
                    launching: false,
                    running: false,
                    tooltip:  'Locking'
                }),
              } 
            }
          },
          // Integrate with Pre Event Que Machine
          queAdd: {
            invoke: {
              id: `checkQue`,
              src: QueMachine,
              onDone: {
                target: 'idle',
              },
              onError: { target: 'idle' }
            },
            on: {
              REMOVED: { target: 'idle' }
            },
            entry: send({ type: 'ADD', account: index }, { to: 'checkQue' } ),
          },
          // Launcher Child Machine
          starting: {
            invoke: {
              id: `accountItemLaunch${index}`,
              src: AccountItemLaunchMachine({ index }),
              onDone: {
                target: 'idle',
              }
            },
            actions: [
              assign({
                authenticating: false,
                launching: true,
                running: false,
              })
            ],
            entry: send('START', { to: `accountItemLaunch${index}` }),
            // Events from Child Machine
            // Update State to trigger repaints
            on: {
              STARTED: { 
                actions: assign({ 
                  process: (context, event) => event.context.process
                })
              },
              TOKEN1: { 
                actions: assign({ 
                  token1: (context, event) => event.context.token1
                })
              },
              TOKEN2: { 
                actions: assign({ 
                  token2: (context, event) => event.context.token2
                })
              },
              STORED: { 
                actions: assign({ 
                  stored: (context, event) => event.context.stored
                }),
              },
              RUNNING: { 
                actions: assign({ 
                  stored: (context, event) => event.context.stored,
                }),
                target: 'running'
              },
              TERMINATING: { 
                actions: assign({ 
                  stored: (context, event) => event.context.stored
                }),
              },
              TERMINATED: { 
                actions: assign({ 
                  stored: (context, event) => event.context.stored,
                }),
              },
              TOOLTIP: { 
                actions: [
                  assign({ tooltip: (context, event) => event.context.tooltip })
                ]
              },
            }
          },
          running: {
            actions: [
              assign({
                authenticating: false,
                launching: false,
                running: true,
              })
            ],
            on: {
                KILL: {
                    actions: assign({
                        tooltip: 'Terminating'
                    }),
                    target: 'terminating'
                }
            },
          },
          terminating: {
            invoke: {
                id: `terminatingProcess`,
                ...AccountItemServices.killProcess,
                onError: {
                   // target: 'onKillFailed'
                },
                onDone: {
                    target: 'killed',
                    actions: assign({
                       killed: (context, event) => true,
                       tooltip: 'Terminated'
                    }),
                },
            },
          },
          killed: {
            invoke: {
                id: 'terminatedProcess',
                ...AccountItemServices.killProcess,
                onError: {
                    //target: 'onKillFailed'
                },
                onDone: {
                    target: 'queRemove',
                    actions: assign({
                         killed: (context, event) => true
                    }),
                },
            }
          },
          // Integrate with Post Event Que Machine
          queRemove: {
            invoke: {
              id: `checkQue`,
              src: QueMachine,
              onDone: {
                target: 'idle',
              },
              onError: { target: 'idle' }
            },
            on: {
              REMOVED: { target: 'idle' }
            },
            entry: send({ type: 'REMOVE', account: index }, { to: 'checkQue' } ),
          },
          // Auth Child Machine
          authenticate: {
            invoke: {
              id: `accountItemAuth${index}`,
              src: AccountItemAuthMachine({ index }),
              onDone: {
                target: 'idle',
              }
            },
            actions: assign({
              authenticating: true,
              tooltip:  'Starting2'
            }),
            entry: send('START', { to: `accountItemAuth${index}` }),
            // Events from Child Machine
            on: {
              STARTED: { 
                actions: assign({ 
                  process: (context, event) => event.context.process
                })
              },
              RUNNING: { 
                actions: assign({ 
                  stored: (context, event) => event.context.stored
                })
              },
              SIGN_IN: { 
                actions: assign({ 
                  stored: (context, event) => event.context.stored
                }),
              },
              SIGNED_IN: { 
                actions: assign({ 
                  stored: (context, event) => event.context.stored
                }),
              },
              TOKEN1: { 
                actions: assign({ 
                  token1: (context, event) => event.context.token1
                })
              },
              TOKEN2: { 
                actions: assign({ 
                  token2: (context, event) => event.context.token2
                })
              },
              STORED: { 
                actions: assign({ 
                  stored: (context, event) => event.context.stored
                }),
                target: 'running'
              },
              LAUNCHED: { 
                actions: assign({ 
                  stored: (context, event) => event.context.stored
                }),
              },
              TOOLTIP: { 
                actions: [
                  assign({ 
                    tooltip: (context, event) => event.context.tooltip
                  })
                ]
              }
            }
          },
          finished: {
            on: {
              RESOLVE: 'idle'
            }
          },
        }
      });
};


