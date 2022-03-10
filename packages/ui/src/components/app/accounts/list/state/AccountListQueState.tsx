// @ts-nocheck
import { send } from '@d2r/libs/dist/notifications';
import { createMachine, assign, sendUpdate, sendParent, respond } from 'xstate';

/*
    Que State for Accounts
        - Used in Account List but functional as Que elsewhere
*/
const isValidPayload = (context, event) => {
    console.log('Is Valid', context, event)
    return true;
};

const shouldRunAfterRemove = (context, event) => {
    console.log('Is Valid', context, event)
    return true;
};

export default function AccountListQueStateMachine() {
    return createMachine({
        id: 'AccountItemQue',
        initial: 'idle',
        context: {
            que: [],
        },
        states: {
            idle: {
                initial: 'active',
                states: {
                    finished: {
                        type: 'final', entry: ['finished'],
                    },
                    invalid: {
                        type: 'final', entry: ['invalid'],
                    },
                    active: {
                        entry: ['active'],
                    },
                },
                on: {  
                    ADD: [
                        {   
                          target: ".active",
                          actions: ['add', sendParent('ADD')],
                          cond: isValidPayload,
                        },
                        { target: '.invalid' }
                    ],
                    REMOVE: [
                        {   
                          target: ".active",
                          actions: ['removing', sendParent('REMOVED')],
                          cond: shouldRunAfterRemove,
                        },
                        {   
                          target: ".finished",
                          actions: ['removing'],
                        },
                    ],
                    CLEAR: [
                        {   
                          target: ".finished",
                          actions: ['clear', sendParent('CLEARED')],
                        },
                    ],
                }
            },
        }
    },
    {
        actions: {
        // action implementations
            add: (context, event) => {
                console.log('Q Adding', event, context);
            },
            removing: (context, event) => {
                console.log('Q Removing!');
            },
            active: (context, event) => {
                console.log('Q Active!');
            },
            clear: (context, event) => {
                console.log('Q Clear!');
            },
            ready: (context, event) => {
                console.log('Q Ready!');
            },
            failed: (context, event) => {
                console.log('Q Failed!');
            },
            finished: (context, event) => {
                console.log('Q Finished!');
            },
            isEmpty: (context, event) => {
                console.log('Q Empty', Date.now());
            },
            status: (context, event) => {
                console.log('Q Status:', Date.now());
            }
        },
        guards: {
          isValidPayload,
          shouldRunAfterRemove,
        }
    })
};
