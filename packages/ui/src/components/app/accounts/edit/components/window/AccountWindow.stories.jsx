import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AccountWindow from './AccountWindow';

export default {
  title: 'app/experience/account/components/AccountEdit/components/AccountWindow',
  component: AccountWindow,
};

const Template = (args) => {
  return (
    <Router>
      <AccountWindow {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  account: {
    window: {
        powertrays: {
            enabled: true,
        }
    }
  }
};



