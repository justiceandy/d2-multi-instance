import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import OnboardingLimitations from './OnboardingLimitations';

export default {
  title: 'app/experience/onboarding/components/steps/Limitations',
  component: OnboardingLimitations,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <OnboardingLimitations {...args} />
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



