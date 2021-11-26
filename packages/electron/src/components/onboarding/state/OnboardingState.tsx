// @ts-nocheck
import { createMachine, assign } from 'xstate';
import OnboardingStateServices from './OnboardingStateServices';
/*
    Parent State Machine for Onboarding
        - Needed to lock states while an account action is being performed
*/
export default function OnboardingStateMachine() {
    return createMachine({
        id: 'OnboardingState',
        initial: 'idle',
        context: {
            accounts: [],
            settingsFile: '',
            errorFile: '',
            shortcutDirectory: '',
            apiEnabled: true,
            automatedLogin: true,
            manageWindowTitles: true,
            notifications: true,
        },
        states: {
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
            introduction: {
                on: { 
                    NEXT: 'configuration' 
                }
            },
            configuration: {
                on: { 
                    NEXT: 'accounts' 
                }
            },
            accounts: {
                on: { 
                    NEXT: 'finalize' 
                }
            },
            finalize: {
                on: { 
                    SUBMIT: 'idle' 
                }
            },
            submitting: {
                on: { 
                    SUBMIT: 'idle' 
                }
            },
            submitted: {
                on: { 
                    SUBMIT: 'idle' 
                }
            },
            rejected: {
                on: { RETRY: 'submitting' }
            }
        }
    });
};
