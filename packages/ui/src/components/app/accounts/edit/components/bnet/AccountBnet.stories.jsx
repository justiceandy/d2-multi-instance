import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AccountBnet from './AccountBnet';

export default {
  title: 'app/experience/account/components/AccountEdit/components/AccountBnet',
  component: AccountBnet,
};

const Template = (args) => {
  return (
    <Router>
      <AccountBnet {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  sessions: [
    '1234',
    '1234',
    '1234',
    '1234',
    '1234',
  ],
  account: {
    battlenet: {
      automate: true,
      offline: false,
      credentials: {
        email: 'test',
        password: '1234',
        session: '1234',
      },
      region: 'NA',
      local: '',
    }
  }
};



