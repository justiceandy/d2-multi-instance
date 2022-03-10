// @ts-nocheck
import { createMachine, assign } from 'xstate';
import AccountEditStateServices from './AccountEditStateServices';
/*
    Parent State Machine for Onboarding
        - Needed to lock states while an account action is being performed
*/
const createAccountEditStateMachine = (context) => {
    return createMachine({
        id: 'AccountEdit',
        initial: 'idle',
        context: {
            general: {
                display: '',
                folder: '',
                main: false,
            },
            ...context,
        },
        on : {
            GENERAL: 'general',
            BATTLENET: 'battlenet',
            CLIENT: 'client',
            WINDOW: 'window', 
            HOTKEY: 'hotkey',
            DELETE: 'delete',
        },
        states: {
            idle: {
                invoke: {
                    id: `getAccountInfo`,
                    ...AccountEditStateServices.getInfo,
                    onError: {
                       // target: 'onKillFailed'
                    },
                    onDone: {
                        actions: assign({
                            general: (context, event) => event.data.general,
                            accounts: (context, event) => event.data.accounts,
                            battlenet: (context, event) => event.data.battlenet,
                            client: (context, event) => event.data.client,
                            hotkey: (context, event) => event.data.hotkey,
                            window: (context, event) => event.data.window,
                        }),
                        target: 'general'
                    },
                },
            },
            general: {
                initial: 'loading',
                states: {
                    loading: {
                        invoke: {
                            id: `isAccountRunning`,
                            ...AccountEditStateServices.isRunning,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    running: (context, event) => event.data,
                                }),
                                target: 'loaded'
                            },
                        },
                    },
                    loaded: {
                        on: {
                            UPDATE_DISPLAY: {
                                actions: [
                                    assign({
                                       
                                    })
                                ]
                            },
                            UPDATE_GAME_FOLDER: {
                                actions: [
                                    assign({
                                       
                                    })
                                ]
                            },
                            target: 'saving'
                        }
                    },
                    saving: {
                        invoke: {
                            id: `saveBnetChanges`,
                            ...AccountEditStateServices.update,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    battlenet: (context, event) => event.data,
                                }),
                                target: 'saved'
                            },
                        },
                    },
                    saved: {
                        target: 'loaded'
                    },
                },
            },
            battlenet: {
                initial: 'loading',
                states: {
                    loading: {
                        invoke: {
                            id: `getAccountAuth`,
                            ...AccountEditStateServices.getCredentials,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    battlenet: (context, event) => event.data,
                                }),
                                target: 'loaded'
                            },
                        },
                    },
                    loaded: {
                        on: {
                            UPDATE_ATTRIBUTE: {
                               target: 'saving'
                            },
                        }
                    },
                    saving: {
                        invoke: {
                            id: `saveBnetChanges`,
                            ...AccountEditStateServices.update,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    battlenet: (context, event) => {
                                        console.log('On Save Bnet Alert', event);
                                    }
                                }),
                                target: 'saved'
                            },
                        },
                    },
                    saved: {
                        target: 'loaded'
                    },
                },
            },
            client: {
                initial: 'loading',
                context: {},
                states: {
                    loading: {
                        invoke: {
                            id: `getClientScripts`,
                            ...AccountEditStateServices.getClientScripts,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    client: (context, event) => event.data,
                                }),
                                target: "loaded"
                            },
                        },
                    },
                    loaded: {
                        on: {
                            UPDATE_ATTRIBUTE: {
                                actions: [
                                    (context, event) => {
                                    console.log('Updating Client', event);
                                    }
                                ]
                            },
                        }
                    },
                    saving: {
                        invoke: {
                            id: `saveClientChanges`,
                            ...AccountEditStateServices.update,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    battlenet: (context, event) => event.data,
                                }),
                                target: 'saved'
                            },
                        },
                    },
                    saved: {
                        target: 'loaded'
                    },
                },
            },
            window: {
                initial: 'loading',
                context: {},
                states: {
                    loading: {
                        invoke: {
                            id: `getAccountWindowSettings`,
                            ...AccountEditStateServices.getWindowPrefs,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    window: (context, event) => event.data,
                                }),
                                target: "loaded"
                            },
                        },
                    },
                    loaded: {
                        on: {
                            UPDATE_ATTRIBUTE: {
                                actions: [
                                    (context, event) => {
                                    console.log('Updating Window', event);
                                    }
                                ]
                            },
                        }
                    },
                    saving: {
                        invoke: {
                            id: `saveWindowChanges`,
                            ...AccountEditStateServices.update,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    window: (context, event) => event.data,
                                }),
                                target: 'saved'
                            },
                        },
                    },
                    saved: {
                        target: 'loaded'
                    },
                },
            },
            hotkey: {
                initial: 'loading',
                context: {},
                states: {
                    loading: {
                        invoke: {
                            id: `getAccountHotkeySettings`,
                            ...AccountEditStateServices.getHotkeyPrefs,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    hotkey: (context, event) => event.data,
                                }),
                                target: "loaded"
                            },
                        },
                    },
                    loaded: {
                        on: {
                            UPDATE_ATTRIBUTE: {
                                actions: [
                                    (context, event) => {
                                    console.log('Updating Hotkey', event);
                                    }
                                ]
                            },
                        }
                    },
                    saving: {
                        invoke: {
                            id: `saveWindowChanges`,
                            ...AccountEditStateServices.update,
                            onError: {
                               // target: 'onKillFailed'
                            },
                            onDone: {
                                actions: assign({
                                    hotkey: (context, event) => event.data,
                                }),
                                target: 'saved'
                            },
                        },
                    },
                    saved: {
                        target: 'loaded'
                    },
                },
            },
            delete: {
                invoke: {
                    id: `deleteAccount`,
                    ...AccountEditStateServices.deleteAccount,
                    onError: {
                       // target: 'onKillFailed'
                    },
                    onDone: {
                        actions: assign({
                            deleted: (context, event) => event.data,
                        }),
                    },
                },
            },
        }
    });
};

let existingAccountEditStateMachine:any = null;

const AccountEditStateMachine = (context:any) => {
    const thisItemStateMachine = existingAccountEditStateMachine || createAccountEditStateMachine(context);
    existingAccountEditStateMachine = thisItemStateMachine;
    return existingAccountEditStateMachine;
}

export default AccountEditStateMachine;

export {
    createAccountEditStateMachine,
    AccountEditStateMachine,
}

