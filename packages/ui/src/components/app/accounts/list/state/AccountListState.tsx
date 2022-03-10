// @ts-nocheck
import { send } from '@d2r/libs/dist/notifications';
import { createMachine, assign } from 'xstate';

/*
    Parent State Machine for Account Item
        - Needed to lock states while an account action is being performed
*/
const defaultApi = () => {
    return window && window.electron && window.electron.ipcRenderer ? 
        window.electron.ipcRenderer
        : null;
}
export default function AccountListStateMachine({ api, unique = ''  }) {
    // support passing predefined api (storybook/tests)
    const ipc = api ? api : defaultApi();

    return createMachine({
        id: `AccountListState${unique}`,
        initial: 'local',
        context: {
            isLocked: false,
            dragEnabled: true,
            region: 'Default',
        },
        on: { 
            LOCAL: 'local',
            SQUADS: 'squads',
            REMOTE: 'remote',
        },
        states: {
            local: {
                initial: 'idle',
                states: {
                    idle: {
                        on: {  LOAD: 'load' }
                    },
                    loaded: {
                        on: { REFRESH: 'load' }
                    },
                    rejected: {
                        on: { REFRESH: 'load' }
                    },
                    load: {
                        invoke: {
                            id: `getAccounts${unique}`,
                            src: (context, event) => ipc ? ipc.getProcesses().then((data:any) =>
                                data
                            ) : null,
                            onDone: {
                                actions: assign({ 
                                    process: (context, event) => event.context,
                                    accounts: (context, event) => event.data,
                                }),
                                target: 'loaded',
                            },
                            onError: 'rejected'
                        },
                        on: { CANCEL: 'idle' }
                    },
                },
            },
            squads: {
                initial: 'idle',
                states: {
                    idle: {
                        on: {  LOAD: 'load' }
                    },
                    loaded: {
                        on: { REFRESH: 'load' }
                    },
                    rejected: {
                        on: { REFRESH: 'load' }
                    },
                    load: {
                        invoke: {
                            id: 'getSquads',
                            src: (context, event) => ipc ? ipc.getProcesses().then((data:any) =>
                                data
                            ) : null,
                            onDone: {
                                actions: assign({ 
                                    squads: (context, event) => event.data,
                                }),
                                target: 'loaded',
                            },
                            onError: 'rejected'
                        },
                        on: { CANCEL: 'idle' }
                    },
                },
               
            },
            remote: {
                initial: 'idle',
                states: {
                    idle: {
                        on: {  LOAD: 'load' }
                    },
                    loaded: {
                        on: { REFRESH: 'load' }
                    },
                    rejected: {
                        on: { REFRESH: 'load' }
                    },
                    load: {
                        invoke: {
                            id: 'getSquads',
                            src: (context, event) => ipc ? ipc.getProcesses().then((data:any) =>
                                data
                            ) : null,
                            onDone: {
                                actions: assign({ 
                                    squads: (context, event) => event.data,
                                }),
                                target: 'loaded',
                            },
                            onError: 'rejected'
                        },
                        on: { CANCEL: 'idle' }
                    },
                },
            },
        }
    });
};
