import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Onboarding from './Onboarding';

export default {
  title: 'app/experience/onboarding',
  component: Onboarding,
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <Onboarding {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
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



