import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import OnboardingMenu from './OnboardingMenu';
import {  useMachine } from '@xstate/react';
import { OnboardingStateMachine } from '../../../state/OnboardingState';
import OnboardingFormFunctions from '../../../libs/formFunctions';


export default {
  title: 'app/experience/onboarding/components/layout/Menu',
  component: OnboardingMenu,
  argTypes: {
    active: { 
        options: [ 'Introduction', 'Limitations', 'Configuration', 'Accounts', 'Finalize'],
        mapping: {
            Introduction: 'introduction',
            Limitations: 'limitations',
            Configuration: 'configuration',
            Accounts: 'accounts',
            Finalize: 'finalize',
        },
        control: 'select' 
    },
  },
};

const Template = (args) => {
  return (
    <Router>
      <OnboardingMenu state {...args} navigate={() => true} />
    </Router>
  )
};

export const Default = Template.bind({});
Default.args = {
    active:  'Introduction',
    steps: [
        { id: 1, label: 'Introduction', state: 'introduction' },
        { id: 2, label: 'Limitations', state: 'limitations' },
        { id: 3, label: 'Configuration', state: 'configuration' },
        { id: 4, label: 'Accounts', state: 'accounts' },
        { id: 5, label: 'Finalize', state: 'finalize' },
    ],
};



