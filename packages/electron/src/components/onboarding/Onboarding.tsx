import OnboardingMenu from 'components/onboarding/components/layout/menu/OnboardingMenu'
import OnboardingIntroduction from './components/introduction/OnboardingIntroduction'
import OnboardingAccounts from './components/accounts/OnboardingAccounts'
import OnboardingFinalize from './components/finalize/OnboardingFinalize';
import OnboardingConfiguration from './components/configuration/OnboardingConfiguration'
import Header from 'components/ui/header/Header';
import OnboardingFooter from 'components/onboarding/components/layout/footer/OnboardingFooter'
import OnboardingStateMachine from './state/OnboardingState';
import OnboardingLimitations from './components/limitations/OnboardingLimitations'
import OnboardingFormFunctions from './libs/formFunctions';
import { MemoryRouter as Router } from 'react-router-dom';
import {  useMachine } from '@xstate/react';

import './Onboarding.css';

export default function OnboardingApp({ settings }:any) {
    let step:any = null;
    let error:any = null;
    
    const { automatedLogin, changeWindowTitles, api } = settings;

    // Item State (passed or initialized)
    const thisItemStateMachine = OnboardingStateMachine({ 
        accounts: settings.accounts || [],
        api: api.enabled || false,
        changeWindowTitles,
        automatedLogin,
    });

    // Ordered Steps as States
    const steps = [
        { id: 1, label: 'Introduction', state: 'introduction' },
        { id: 2, label: 'Limitations', state: 'limitations' },
        { id: 3, label: 'Configuration', state: 'configuration' },
        { id: 4, label: 'Accounts', state: 'accounts' },
        { id: 5, label: 'Finalize', state: 'finalize' },
    ]

    // Destruct machines
    const [ state, send ]:any = useMachine(thisItemStateMachine);
    // Form Functions that are passed to components including events to ^ machine
    const {
        next, prev, onFormInputChanged, onCheckBoxChanged,
        navigateStep, addAccount, removeAccount, 
         finalize, openDiscord, openPatreon, 
        openGithub,
    } = OnboardingFormFunctions(send, state);

    const { context } = state;

    if(context.error) error = context.error;

    // Determine Step from State Context
    step = state ? steps.filter(i => state.value === i.state).pop() : null;
    // Handle Idle Step
    if(!step && state.value === 'idle') step = state.value;
    // Handle Nested Stages
    if(!step) step = steps.filter(i => Object.keys(state.value).indexOf(i.state) >= 0).pop()

  return (
    <div>
        <Router>
            <Header />
            <OnboardingMenu navigate={navigateStep} step={step} steps={steps} />

            { !step || step.state === 'idle' ? 
                    <span>Loading</span> 
            : null}

            { step && step.state === 'introduction' ? 
                <OnboardingIntroduction /> : null}

            { step && step.state === 'limitations' ? 
                <OnboardingLimitations /> : null}

            { step && step.state === 'configuration' ?  
                <OnboardingConfiguration
                        automatedLogin={context.automatedLogin}
                        changeWindowTitles={context.changeWindowTitles}
                        apiEnabled={context.apiEnabled}
                        autoUpdate ={context.autoUpdate}
                        addStartup={context.addStartup}
                        genShortcuts={context.genShortcuts}
                        onCheckBoxChanged={onCheckBoxChanged}
                        onInputChanged={onFormInputChanged}
                        appPath={context.paths ? context.paths.appPath : null}
                        installPath={context.paths ? context.paths.appPath : null}
                        desktop={context.paths ? context.paths.desktop : null}
            /> : null}

            { step && step.state === 'accounts' ? 
                <OnboardingAccounts 
                     addAccount={addAccount}
                     removeAccount={removeAccount}
                     error={error}
                     accounts={context.accounts} 
            /> : null}
            
            { step && step.state === 'finalize' ? 
                <OnboardingFinalize 
                    finalize={finalize}
                    state={state.value}
                    accounts={context.accounts} 
            /> : null}

            { step && step.state !== 'idle' ? 
                <OnboardingFooter 
                    next={next}
                    step={step}
                    steps={steps}
                    openDiscord={openDiscord}
                    openPatreon={openPatreon}
                    openGithub={openGithub}
                    prev={prev}
                    submit={finalize}
             /> : null}

        </Router>
    </div>
  );
}
