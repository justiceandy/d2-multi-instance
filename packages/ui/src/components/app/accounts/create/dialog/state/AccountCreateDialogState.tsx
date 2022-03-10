// @ts-nocheck
import { createMachine, assign } from 'xstate';
import AccountCreateDialogServices from './AccountCreateDialogServices';
/*
    State Machine for Create Account Dialog
*/
const createAccountDialogStateMachine = (context:any) => {

    return createMachine({
        id: 'CreateAccountDialog',
        initial: 'idle',
        context: {
            open: false,
            errors: [],
            ...context,
            validName: false,
            validFolder: false,
            isExistingFolder: false,
            validated: false,
            displayName: '',
            folder: ''
        },
        on : {
            VALIDATE: 'validate',
            OPEN: {
                actions: [assign({
                    open: (context, event) => true,
                })] ,
                target: 'idle',
            },
            UPDATE_ACCOUNTS: {
                actions: [assign({
                    accounts: (context, event) => event.accounts,
                })] ,
            },
            CLOSE: {
                actions: [assign({
                    open: (context, event) => false,
                })] ,
                target: 'idle',
            },
            RESET: {
                    actions: [assign({
                        folder: (context, event) => {
                            console.log('Reset EVent')
                            return ''
                        },
                        validFolder: (context, event) => false,
                        validName: (context, event) => false,
                        validated: (context, event) => false,
                        displayName:(context, event) => '',
                        errors: [],
                    })] ,
                    target: 'idle',
            },
            UPDATE_NAME: {
                actions: [
                    assign({
                        displayName: (context, event) => {
                            return event.value
                        },
                        validName: (context, event) => {
                            const matchingAccountName = event.accounts.filter(({ display }:any) => display === event.value).pop();
                            return event.value.length >= 1 && !matchingAccountName;
                        },
                        validated: (context, event) => {
                            const lengthCheck = event.value.length >= 1;
                            if(!lengthCheck) return false;
                            const matchingAccountName = event.accounts.filter(({ display }:any) => display === event.value).pop();
                            if(matchingAccountName) return false;
                            return context.validFolder;
                        },
                        accounts: (context, event) => event.accounts,
                    }),
                    assign({
                        errors: (context, event) => {
                            const errors = [];
                            if(context.isExistingFolder) errors.push('Unique Game Folder Required');
                            if(!context.validName) errors.push('Unique Name is required')
                            console.log('errors after', context)
                            return errors;
                        },
                    }),
                ] ,
            }
        },
        states: {
            // Load State
            idle: {
            },
            // Step 1
            validate: {
                entry:{
                    actions: [
                        assign({
                            accounts: (context, event) => event.accounts,
                        })
                    ],
                },
                invoke: {
                    id: `validateNameAndFolder`,
                    ...AccountCreateDialogServices.verifyGameFolder,
                    onError: {
                       target: 'error'
                    },
                    onDone: {
                        target: 'valid',
                        actions: [ 
                            assign({
                                folder: (context, event) => {
                                    const thisFolder =  event.data.folder.split('\\');
                                    const popped = thisFolder.pop();
                                    return thisFolder.join('\\');
                                },
                                name: (context, event) => event.data.name,
                                validFolder: true,
                                isExistingFolder: (context, event) => {
                                    const accounts = event.accounts || [];
                                    const matchingFolder = accounts.filter(({ folder }:any) => {
                                        const thisFolder =  event.data.folder.split('\\');
                                        const popped = thisFolder.pop();
                                        console.log(thisFolder.join('\\'), folder);
                                        return folder === thisFolder.join('\\')
                                    }).pop();
                                    const matchingFolder2 = context.accounts.filter(({ folder }:any) => {
                                        const thisFolder =  event.data.folder.split('\\');
                                        const popped = thisFolder.pop();
                                        console.log(thisFolder.join('\\'), folder);
                                        return folder === thisFolder.join('\\')
                                    }).pop();
                                    console.log('Folder COmpare', matchingFolder, matchingFolder2)
                                    return !matchingFolder && !matchingFolder2 ? false : true;
                                },
                                validated: (context, event) => {
                                    return context.validName;
                                },
                            }),
                            assign({
                                errors: (context, event) => {
                                    const errors = [];
                                    if(context.isExistingFolder) errors.push('Unique Game Folder Required');
                                    if(!context.validName) errors.push('Unique Name is required')
                                    console.log('errors after', context)
                                    return errors;
                                },
                            })
                        ],
                    },
                },
                on: { 
                    NEXT: 'valid' 
                }
            },
            valid: {
                on: { 
                    SUBMIT: 'idle',
                }
            },
            error: {
                on: { 
                    RESET: 'idle',
                    RETRY: 'validate'
                }
            },
        },
    })
};

let existingCreateAccountState:any = null;

const AccountDialogStateMachine = (context:any) => {
    const thisItemStateMachine = existingCreateAccountState || createAccountDialogStateMachine(context);
    existingCreateAccountState = thisItemStateMachine;
    return existingCreateAccountState;
}

export default AccountDialogStateMachine;

export {
    createAccountDialogStateMachine,
    AccountDialogStateMachine,
}

