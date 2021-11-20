// @ts-nocheck
import { assign, createMachine } from 'xstate';

export default function AccountsStateMachine() {
    return createMachine({
        id: 'accountItem',
        initial: 'locked',
        context: {
          retries: 0,
          running: false,
        },
        states: {
          locked: {
            on: {
              UNLOCK: 'idle',
            }
          },
          idle: {
            on: {
              DRAG: 'dragStart',
              LAUNCH: 'starting',
              AUTH: 'starting'
            }
          },
          dragStart: {
            on: {
              DROP: 'dragStop',
              CANCEL: 'idle',
            }
          },
          dragStop: {
            on: {
              SAVE: 'dragSaved',
            }
          },
          dragSaved: {
            invoke: {
                label: 'savingDrag',
                id: `savingDrag`,
                name: 'savingDrag',
                src: () => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                    data
                ),
                onDone: 'idle',
                onError: 'onDropFailed'
            },
            target: 'running'
          },
          starting: {
            invoke: {
                id: `startingProcess`,
                name: 'startingProcess',
                src: () => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                    data
                ),
                onDone: 'started',
                onError: 'onStartFailed'
            },
            target: 'running'
          },
          started: {
            invoke: {
                id: `startingProcess`,
                name: 'startingProcess',
                src: () => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                    data
                ),
                onDone: 'token1',
                onError: 'onStartFailed'
            },
            target: 'token1'
          },
          token1: {
            invoke: {
                id: `savingToken1`,
                src: () => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                    data
                ),
                onDone: 'token2',
                onError: 'onToken1Failed'
            },
            target: 'token2',
            actions: assign({
               running: (context, event) => true
            }),
          },
          token2: {
            target: 'tokensStored',
            invoke: {
                id: `savingToken1`,
                src: () => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                    data
                ),
                onDone: 'tokensStored',
                onError: 'onToken2Failed'
            },
            actions: assign({
               running: (context, event) => true
            }),
          },
          tokensStored: {
            invoke: {
                id: `savingToken2`,
                src: () => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                    data
                ),
                onDone: 'running',
                onError: 'onAuthStoreFailed'
            },
            target: 'running',
            on: {
                TOKEN2: 'running'
            }
          },
          running: {
            actions: assign({
               running: (context, event) => true
            }),
            on: {
                KILL: 'terminating'
            }
          },
          terminating: {
            invoke: {
                id: `terminatingAccount`,
                src: () => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                    data
                ),
                onError: {
                    target: 'onkillFailed'
                },
                onDone: {
                    target: 'killed'
                },
            },
            actions: assign({
               killed: (context, event) => true
            }),
          },
          killed: {
            type: 'final',
            src: () => window.electron.ipcRenderer.getProcesses().then((data:any) =>
              data
            ),
            actions: assign({
               killed: (context, event) => true
            }),
            onError: {
                target: 'onKillFailed'
            },
            onDone: {
                target: 'idle'
            },
          },
          onStartFailed: {
            on: {
              RETRY: {
                target: 'starting',
                actions: assign({
                  retries: (context, event) => context.retries + 1
                })
              }
            }
          },
          onkillFailed: {
            on: {
              RETRY: {
                target: 'terminating',
                actions: assign({
                  retries: (context, event) => context.retries + 1
                })
              },
              CANCEL: {
                target: 'running',
                actions: assign({
                  retries: (context, event) => context.retries + 1
                })
              }
            }
          },
          onToken1Failed: {
            on: {
              RETRY: {
                target: 'token1',
                actions: assign({
                  retries: (context, event) => context.retries + 1
                })
              },
            }
          },
          onToken2Failed: {
            on: {
              RETRY: {
                target: 'token2',
                actions: assign({
                  retries: (context, event) => context.retries + 1
                })
              },
              ABORT: {
                target: 'running',
                actions: assign({
                  retries: (context, event) => context.retries + 1
                })
              }
            }
          },
          onAuthStoreFailed: {
            on: {
                RETRY: {
                  target: 'token2',
                  actions: assign({
                    retries: (context, event) => context.retries + 1
                  })
                },
                ABORT: {
                  target: 'running',
                  actions: assign({
                    retries: (context, event) => context.retries + 1
                  })
                }
              }
          },
          onDropFailed: {
            on: {
              RETRY: {
                target: 'dragSaved',
                actions: assign({
                  retries: (context, event) => context.retries + 1
                })
              },
              RESET: {
                target: 'dragStart',
                actions: assign({
                  retries: (context, event) => context.retries + 1
                })
              }
            }
          },
        }
      });
};


