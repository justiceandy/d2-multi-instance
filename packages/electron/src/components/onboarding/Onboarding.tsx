

import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import {  useMachine } from '@xstate/react';
import OnboardingMenu from 'components/onboarding/layout/menu/OnboardingMenu'
import OnboardingIntroduction from './introduction/OnboardingIntroduction'
import OnboardingAccounts from './accounts/OnboardingAccounts'
import OnboardingFinalize from './finalize/OnboardingFinalize';
import OnboardingConfiguration from './configuration/OnboardingConfiguration'
import Header from 'components/ui/header/Header';
import OnboardingStateMachine from './state/OnboardingState';

import './Onboarding.css';

let existingOnboardingState:any = null;

export default function OnboardingApp({ settings, OnboardState }:any) {

    // Item State (passed or initialized)
    const thisItemStateMachine = OnboardState || existingOnboardingState || OnboardingStateMachine();
    existingOnboardingState = thisItemStateMachine;

    // Destruct machines
    const [ state ] = useMachine(thisItemStateMachine);

    console.log(state.value, state.context)
  return (
    <div>
    <Router>
      <Header />
        <OnboardingMenu />
            <Switch>
                <Route exact path="/" render={() => <OnboardingIntroduction />} />
                <Route exact path="/accounts" render={() => <OnboardingAccounts accounts={settings.accounts} />} />
                <Route exact path="/configuration" render={() => <OnboardingConfiguration
                    automatedLogin={settings.automatedLogin}
                    changeWindowTitles={settings.changeWindowTitles}
                    notifications={settings.notifications}
                    api={settings.api}
                     /* @ts-expect-error */
                    appPath={state.context.paths ? state.context.paths.appPath : null}
                     /* @ts-expect-error */
                    installPath={state.context.paths ? state.context.paths.appPath : null}
                     /* @ts-expect-error */
                    desktop={state.context.paths ? state.context.paths.desktop : null}
                 />} />
                 <Route exact path="/finalize" render={() => <OnboardingFinalize  />} />
            </Switch>
      </Router>
    </div>
  );
}
