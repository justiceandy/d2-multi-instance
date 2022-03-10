// @ts-nocheck
import { createMachine, assign } from 'xstate';
import OnboardingStateServices from './OnboardingStateServices';
/*
    Parent State Machine for Onboarding
        - Needed to lock states while an account action is being performed
*/
const createOnboardingStateMachine = ({ 
    accounts,
    apiEnabled = true, 
    changeWindowTitles = true, 
    automatedLogin = true,
    autoUpdate = false,
}) => {
    return createMachine({
        id: 'OnboardingState',
        initial: 'idle',
        context: {
            accounts,
            settingsFile: '',
            errorFile: '',
            shortcutDirectory: '',
            apiEnabled,
            automatedLogin,
            changeWindowTitles,
            autoUpdate,
            addStartup: false,
            genShortcuts: true,
            notifications: true,
        },
        on : {
            introduction: 'introduction',
            limitations: 'limitations',
            configuration: 'configuration',
            accounts: 'accounts', 
            finalize: 'finalize', 
        },
        states: {
            // Load State
            idle: {
                invoke: {
                    id: `getAppVersion`,
                    ...OnboardingStateServices.getAppPaths,
                    onError: {
                       // target: 'onKillFailed'
                    },
                    onDone: {
                        target: 'introduction',
                        actions: assign({
                            paths: (context, event) => event.data,
                        }),
                    },
                },
                on: {
                    NEXT: 'introduction'
                }
            },
            // Step 1
            introduction: {
                on: { 
                    NEXT: 'limitations' 
                }
            },
            // Step 2
            limitations: {
                on: { 
                    PREV: 'introduction',
                    NEXT: 'configuration' 
                }
            },
            // Step 3
            configuration: {
                entry: {
                    actions: [
                        assign({
                            test: (event, context) => console.log(12)
                        })
                    ]
                },
                on: { 
                    PREV: 'limitations',
                    NEXT: 'accounts',
                    UPDATE_SETTING: {
                        actions: [
                            assign({
                                apiEnabled: (context, event) => {
                                    if(event.name !== 'apiEnabled') return context.apiEnabled;
                                    return event.value
                                },
                                automatedLogin: (context, event) => {
                                    if(event.name !== 'automatedLogin') return context.automatedLogin;
                                    return event.value
                                },
                                changeWindowTitles: (context, event) => {
                                    if(event.name !== 'changeWindowTitles') return context.changeWindowTitles;
                                    return event.value
                                },
                                addStartup: (context, event) => {
                                    if(event.name !== 'addStartup') return context.addStartup;
                                    return event.value
                                },
                                autoUpdate : (context, event) => {
                                    if(event.name !== 'autoUpdate') return context.autoUpdate;
                                    return event.value
                                },
                                genShortcuts: (context, event) => {
                                    if(event.name !== 'genShortcuts') return context.genShortcuts;
                                    return event.value
                                },
                                shortcutDirectory: (context, event) => {
                                    if(event.name !== 'shortcutDirectory') return context.shortcutDirectory;
                                    return event.value
                                },
                            })
                        ]
                    },
                }
            },
            // Step 4
            accounts: {
                initial: 'idle',
                states: {
                    idle: {
                        entry: [
                            assign({
                                submitted: (context, event) => {
                                    console.log('Account Entry')
                                },
                            }),
                        ]
                    },
                    adding: {
                        invoke: {
                            id: `validateNameAndFolder`,
                            ...OnboardingStateServices.verifyGameFolder,
                            onError: {
                               target: 'error'
                            },
                            onDone: {
                                target: 'added',
                                actions: assign({
                                    verified: (context, event) => event.data,
                                }),
                            },
                            target: 'added'
                        },
                    },
                    added: {
                        entry: {
                            actions: assign({
                                added: (context, event) => true,
                            }),
                            target: 'idle'
                        }
                    },
                    error: {
                        entry: {
                            actions: assign({
                                error: (context, event) => true,
                            }),
                            target: 'idle'
                        }
                    },
                },
                on: { 
                    PREV: 'configuration',
                    NEXT: 'finalize',
                    REMOVE: {
                        actions: [
                            assign({
                                accounts: (context, event) => {
                                    const removed = context.accounts.filter(i => i.display !== event.account);
                                    console.log('Remove', event.account, removed);
                                    context.accounts = removed;
                                    return removed;
                                }
                            }),
                            assign({
                                test: (context, event) => {
                                    const removed = context.accounts.filter(i => i.display !== event.account);
                                    console.log('Remove', event.account, removed);
                                    context.accounts = removed;
                                    console.log(removed)
                                }
                            })
                        ]
                    },
                    ADD: {
                        actions: [
                            assign({
                                accounts: (context, event) => {
                                    console.log(event)
                                    console.log('current accounts', context.accounts)
                                    console.log('added', context.accounts.push( {
                                        display: event.display,
                                        folder: event.folder,
                                        name: '',
                                        tokens: {},
                                    }))
                                    return context.accounts;
                                }
                            })
                        ]
                    },
                }
            },
            // Step 5
            finalize: {
                initial: 'idle',
                states: {
                    idle: {
                        entry: [
                            assign({
                                submitted: (context, event) => {
                                    console.log('Idle Entry')
                                },
                            }),
                        ]
                    },
                    submitting: {
                        invoke: {
                            id: `submitOnboardForm`,
                            ...OnboardingStateServices.save,
                            onError: {
                               target: 'rejected'
                            },
                            onDone: {
                                target: 'loadDashboard',
                                actions: assign({
                                    submittedResponse: (context, event) => event.data,
                                }),
                            },
                            target: 'submitted'
                        },
                    },
                    submitted: {
                        entry: {
                            actions: assign({
                                submitted: (context, event) => true,
                            }),
                        }
                    },
                    loadDashboard: {
                        invoke: {
                            id: `navDashboard`,
                            ...OnboardingStateServices.goToDashboard,
                            onError: {
                               target: 'rejected'
                            },
                            onDone: {
                                actions: assign({
                                    dashboardResponse: (context, event) => event.data,
                                }),
                            },
                        },
                    },
                    rejected: {
                        on: { RETRY: 'submitting' }
                    }
                },
                on: { 
                    PREV: 'accounts',
                    SUBMIT: '.submitting'
                }
            },
            loadDashboard: {
              
            }
        }
    });
};

let existingOnboardingState:any = null;

const OnboardingStateMachine = (context:any) => {
    const thisItemStateMachine = existingOnboardingState || createOnboardingStateMachine(context);
    existingOnboardingState = thisItemStateMachine;
    return existingOnboardingState;
}

export default OnboardingStateMachine;

export {
    createOnboardingStateMachine,
    OnboardingStateMachine,
}

