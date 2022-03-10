import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import OnboardingFooter from './OnboardingFooter';

export default {
  title: 'app/experience/onboarding/components/layout/Footer',
  component: OnboardingFooter,
};

const Template = (args) => {
  return (
    <Router>
      <OnboardingFooter {...args} />
    </Router>
  )
};

export const First = Template.bind({});
First.args = {
    next: () => true,
    step: {
        id: 1,
        state: 'introduction',
    }, 
    steps: [
        { id: 1, label: 'Introduction', state: 'introduction' },
        { id: 2, label: 'Limitations', state: 'limitations' },
        { id: 3, label: 'Configuration', state: 'configuration' },
        { id: 4, label: 'Accounts', state: 'accounts' },
        { id: 5, label: 'Finalize', state: 'finalize' },
    ],
    prev: () => true,
    submit: () => true,
    openGithub: () => true,
    openPatreon: () => true, 
    openDiscord: () => true,
};



export const Middle = Template.bind({});
Middle.args = {
    next: () => true,
    step: {
        id: 2,
        state: 'limitations',
    }, 
    steps: [
        { id: 1, label: 'Introduction', state: 'introduction' },
        { id: 2, label: 'Limitations', state: 'limitations' },
        { id: 3, label: 'Configuration', state: 'configuration' },
        { id: 4, label: 'Accounts', state: 'accounts' },
        { id: 5, label: 'Finalize', state: 'finalize' },
    ],
    prev: () => true,
    submit: () => true,
    openGithub: () => true,
    openPatreon: () => true, 
    openDiscord: () => true,
};


export const Last = Template.bind({});
Last.args = {
    next: () => true,
    step: {
        id: 5,
        state: 'finalize',
    }, 
    steps: [
        { id: 1, label: 'Introduction', state: 'introduction' },
        { id: 2, label: 'Limitations', state: 'limitations' },
        { id: 3, label: 'Configuration', state: 'configuration' },
        { id: 4, label: 'Accounts', state: 'accounts' },
        { id: 5, label: 'Finalize', state: 'finalize' },
    ],
    prev: () => true,
    submit: () => true,
    openGithub: () => true,
    openPatreon: () => true, 
    openDiscord: () => true,
};


export const NoStep = Template.bind({});
NoStep.args = {
    next: () => true,
    step: null, 
    steps: [
        { id: 1, label: 'Introduction', state: 'introduction' },
        { id: 2, label: 'Limitations', state: 'limitations' },
        { id: 3, label: 'Configuration', state: 'configuration' },
        { id: 4, label: 'Accounts', state: 'accounts' },
        { id: 5, label: 'Finalize', state: 'finalize' },
    ],
    prev: () => true,
    submit: () => true,
    openGithub: () => true,
    openPatreon: () => true, 
    openDiscord: () => true,
};
