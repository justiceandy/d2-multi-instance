import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import OnboardingIntroduction from './OnboardingIntroduction';

export default {
  title: 'app/experience/onboarding/components/steps/Introduction',
  component: OnboardingIntroduction,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <OnboardingIntroduction {...args} />
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



