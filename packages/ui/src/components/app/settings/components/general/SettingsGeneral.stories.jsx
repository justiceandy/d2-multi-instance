import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import SettingsGeneral from './SettingsGeneral';

export default {
  title: 'app/experience/settings/components/General',
  component: SettingsGeneral,
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <SettingsGeneral {...args} />
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



