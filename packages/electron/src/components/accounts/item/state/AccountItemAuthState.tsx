// @ts-nocheck
import { assign, createMachine, sendUpdate, sendParent } from 'xstate';
import AccountItemServices from './AccountItemStateServices';

export default function AccountItemAuthMachine ({ index }) {
    return createMachine({
        id: `authMachine`,
        initial: 'idle',
        context: {
            retries: 0,
            tooltip: "",
            authenticating: false,
            running: false,
        },
        states: {
            // Default
            idle: {
                entry: {
                    actions: assign({
                        authenticating: false,
                        tooltip: 'Idle'
                    })
                },
                on: {
                    START: 'starting'
                }
            },
            // Step 1
            starting: {
                invoke: {
                    id: `startingProcess`,
                    name: 'startingProcess',
                    onDone: {
                        actions: [
                            assign({
                                authenticating: false,
                                tooltip: 'Starting Battle.net',
                                launching: true,
                                account: index,
                                process: (context, event) => event.data,
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    name: context.tooltip, 
                                    type: 'TOOLTIP' 
                                }
                            }),
                        ],
                        target: 'started',
                    },
                    onError: 'onStartFailed',
                    ...AccountItemServices.openD2,
                },
              },
            // Step 2
            started: {
                invoke: {
                    id: `startedProcess`,
                    name: 'startedProcess',
                    onDone: {
                        actions: [
                            assign({
                                authenticating: false,
                                tooltip: 'Started Battle.net',
                                launching: false,
                                running: true,
                                account: index,
                                process: (context, event) => event.data,
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    name: context.tooltip, 
                                    type: 'TOOLTIP' 
                                }
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    type: 'STARTED' 
                                }
                            }),
                        ],
                        target: 'signIn',
                    },
                    onError: 'onStartFailed',
                    ...AccountItemServices.isStarted,
                },
                target: 'token1',
              },
            // Step 2
            signIn: {
                invoke: {
                    id: `signIn`,
                    name: 'signIn',
                    onDone: {
                        actions: [
                            assign({
                                authenticating: false,
                                tooltip: 'Signin In',
                                launching: false,
                                running: true,
                                account: index,
                                process: (context, event) => event.data,
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    name: context.tooltip, 
                                    type: 'TOOLTIP' 
                                }
                            }),
                        ],
                        target: 'token1',
                    },
                    onError: 'onStartFailed',
                    ...AccountItemServices.isStarted,
                },
                target: 'token1',
              },
            // Step 2
            signIn: {
                invoke: {
                    id: `signIn`,
                    name: 'signIn',
                    onDone: {
                        actions: [
                            assign({
                                authenticating: false,
                                tooltip: 'Signin In',
                                launching: false,
                                running: true,
                                account: index,
                                process: (context, event) => event.data,
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    name: context.tooltip, 
                                    type: 'TOOLTIP' 
                                }
                            }),
                        ],
                        target: 'token1',
                    },
                    onError: 'onStartFailed',
                    ...AccountItemServices.isStarted,
                },
                target: 'token1',
              },
              // Step 3
              token1: {
                invoke: {
                    id: `savingToken1`,
                    name: 'savingToken1',
                    onDone: {
                        actions: [
                            assign({
                                authenticating: false,
                                tooltip: 'Token 1',
                                launching: false,
                                running: true,
                                account: index,
                                token1: (context, event) => event.data,
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    name: context.tooltip, 
                                    type: 'TOOLTIP' 
                                }
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    type: 'TOKEN1' 
                                }
                            }),
                        ],
                        target: 'token2',
                    },
                    onError: 'onToken1Failed',
                    ...AccountItemServices.waitForToken,
                },
              },
              // Step 4
              token2: {
                invoke: {
                    id: `savingToken2`,
                    onDone: {
                        actions: [
                            assign({
                                authenticating: false,
                                tooltip: 'Token 2',
                                launching: false,
                                running: true,
                                account: index,
                                token2: (context, event) => event.data,
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    name: context.tooltip, 
                                    type: 'TOOLTIP' 
                                }
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    type: 'TOKEN2' 
                                }
                            }),
                        ],
                        target: 'tokensStored',
                    },
                    onError: 'onToken2Failed',
                    ...AccountItemServices.waitForToken,
                },
              },
              // Step 5
              tokensStored: {
                invoke: {
                    onDone: {
                        actions: [
                            assign({
                                authenticating: false,
                                tooltip: 'Saved Token',
                                launching: false,
                                running: true,
                                account: index,
                                stored: (context, event) => event.data,
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    name: context.tooltip, 
                                    type: 'TOOLTIP' 
                                }
                            }),
                            sendParent((context, event) => {
                                return { 
                                    context, 
                                    type: 'STORED' 
                                }
                            }),
                        ],
                        target: 'idle',
                    },
                    onError: 'onAuthStoreFailed',
                    ...AccountItemServices.storeToken,
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
                      actions: assign({
                        retries: (context, event) => context.retries + 1
                      })
                    }
                  }
              },
        },
    });
}
