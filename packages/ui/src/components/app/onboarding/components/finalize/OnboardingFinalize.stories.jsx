import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import OnboardingFinalize from './OnboardingFinalize';

export default {
  title: 'app/experience/onboarding/components/steps/Finalize',
  component: OnboardingFinalize,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <OnboardingFinalize {...args} />
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



