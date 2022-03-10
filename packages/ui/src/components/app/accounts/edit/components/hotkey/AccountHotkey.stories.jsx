import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AccountHotkey from './AccountHotkey';

export default {
  title: 'app/experience/account/components/AccountEdit/components/AccountHotkey',
  component: AccountHotkey,
};

const Template = (args) => {
  return (
    <Router>
      <AccountHotkey {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  account: {
    hotkey: {
        enabled: true,
        modifier: 'Shift',
        key: 'A',
    }
  }
};



