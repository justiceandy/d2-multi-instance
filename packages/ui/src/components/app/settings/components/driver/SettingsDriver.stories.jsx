import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import SettingsDriver from './SettingsDriver';

export default {
  title: 'app/experience/settings/components/Driver',
  component: SettingsDriver,
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <SettingsDriver {...args} />
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



