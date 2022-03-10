import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import SettingsShortcut from './SettingsShortcut';

export default {
  title: 'app/experience/settings/components/Shortcut',
  component: SettingsShortcut,
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <SettingsShortcut {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
    route: '/service/general',
    settings: {
        automatedLogin: false,
        changeWindowTitles: true,
        accounts: [],
        api: {
            enabled: true,
            port: 3000
        }
    }
};



