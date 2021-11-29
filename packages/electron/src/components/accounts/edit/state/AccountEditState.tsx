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
        context: context,
        on : {
            general: 'general',
            battlenet: 'battlenet',
            client: 'client',
            window: 'window', 
            hotkey: 'hotkey',
            delete: 'delete',
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
                            account: (context, event) => event.data,
                        }),
                        target: 'general'
                    },
                },
            },
            general: {
                invoke: {
                    id: `isAccountRunning`,
                    ...AccountEditStateServices.isRunning,
                    onError: {
                       // target: 'onKillFailed'
                    },
                    onDone: {
                        actions: assign({
                            general: (context, event) => event.data,
                        }),
                    },
                },
            },
            battlenet: {
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
                    },
                },
            },
            client: {
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
                    },
                },
            },
            window: {
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
                    },
                },
            },
            hotkey: {
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

export default AccountEditStateMachine = (context:any) => {
    const thisItemStateMachine = existingAccountEditStateMachine || createAccountEditStateMachine(context);
    existingAccountEditStateMachine = thisItemStateMachine;
    return existingAccountEditStateMachine;
}

export {
    createAccountEditStateMachine,
    AccountEditStateMachine,
}

