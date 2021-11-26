// @ts-nocheck
import { createMachine, assign } from 'xstate';

/*
    Parent State Machine for Account List
        - Needed to lock states while an account action is being performed
*/
export default function AccountStateMachine() {
    return createMachine({
        id: 'AccountState',
        initial: 'idle',
        context: {
            accounts: [],
            que: [],
            isLocked: true,
        },
        services: {
            getAccounts: (context, event) => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                data
            ),
            triggerNextItem: (context, event) => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                data
            ),
            que: (context, event) => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                data
            ),
        },
        states: {
            idle: {
                on: {
                    LOAD: 'loading'
                }
            },
            loading: {
                invoke: {
                    id: 'getAccounts',
                    src: 'getAccounts',
                    onDone: {
                        target: 'loaded',
                    },
                    onError: 'rejected'
                },
                on: { CANCEL: 'idle' }
            },
            que: {
                invoke: {
                    id: 'queItem',
                    src: 'queItem',
                    onDone: {
                        target: 'locked',
                    },
                    onError: 'rejected'
                },
                on: {  CANCEL: 'loaded' }
            },
            locked: {
                on: {
                    UNLOCK: 'loaded',
                    NEXT: 'checkQue'
                }
            },
            checkQue: {
                invoke: {
                    id: 'triggerNextItem',
                    src: 'triggerNextItem',
                    onDone: {
                        target: 'locked',
                    },
                    onError: 'loaded'
                },
                on: {
                    NEXT: 'locked',
                    UNLOCK: 'loaded',
                }
            },
            loaded: {
                on: {
                     LOCK: {
                        actions: [
                            assign({ 
                                process: (context, event) => {
                                    console.log('Lock Event')
                                }
                            })
                        ],
                     },
                     QUE: 'que',
                     REFRESH: 'loading'
                 }
             },
            rejected: {
                on: { RETRY: 'loading' }
            }
        }
    });
};
