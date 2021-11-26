// @ts-nocheck
import { send } from '@d2r/libs/dist/notifications';
import { createMachine, assign } from 'xstate';

/*
    Parent State Machine for Account Item
        - Needed to lock states while an account action is being performed
*/
export default function AccountListStateMachine() {
    return createMachine({
        id: 'AccountState',
        initial: 'idle',
        context: {
            isLocked: false,
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
                    src: (context, event) => window.electron.ipcRenderer.getProcesses().then((data:any) =>
                        data
                    ),
                    onDone: {
                        actions: assign({ 
                            process: (context, event) => event.context,
                            accounts2: (context, event) => event.data,
                        }),
                        target: 'loaded',
                    },
                    onError: 'rejected'
                },
                on: { CANCEL: 'idle' }
            },
            loaded: {
                on: {
                     REFRESH: 'loading'
                 }
             },
            rejected: {
                on: { RETRY: 'loading' }
            }
        }
    });
};
