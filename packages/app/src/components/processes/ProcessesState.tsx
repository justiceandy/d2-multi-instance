import { createMachine, assign } from 'xstate';

export default function ProcessStateMachine() {
    return createMachine({
        id: 'Dog API',
        initial: 'idle',
        context: {
            dog: null,
            processes: null
        },
        states: {
            idle: {
                on: {
                    FETCH: 'loading'
                }
            },
            loading: {
                invoke: {
                    id: 'fetchDog',
                    src: () =>
                    /* @ts-expect-error */
                    window.electron.ipcRenderer.getProcesses().then((data:any) =>
                        data
                    ),
                    onDone: {
                    target: 'resolved',
                    actions: assign({
                        processes: (_, event) => event.data
                    }),
                    },
                    onError: 'rejected'
                },
                on: {
                    CANCEL: 'idle'
                }
            },
            resolved: {
               type: 'final'
            },
            rejected: {
                on: {
                    FETCH: 'loading'
                }
            }
        }
    });
};
