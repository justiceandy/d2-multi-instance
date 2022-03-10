import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import OnboardingConfiguration from './OnboardingConfiguration';

export default {
  title: 'app/experience/onboarding/components/steps/Configuration',
  component: OnboardingConfiguration,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <OnboardingConfiguration {...args} />
    </Router>
  )
};

export const Default = Template.bind({});
Default.args = {
    route: '/service/general',
    settings: {
        automatedLogin: false,
        changeWindowTitles: true,
        api: {
            enabled: true,
            port: 3000
        }
    }
};



