import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AccountGeneral from './AccountGeneral';

export default {
  title: 'app/experience/account/components/AccountEdit/components/AccountGeneral',
  component: AccountGeneral,
};

const Template = (args) => {
  return (
    <Router>
      <AccountGeneral {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  account: {
    general: {
        name: '',
        display: 'display-name',
        folder: 'G:\\Blizzard\\Diablo II Resurrected',
        main: true,
        active: true,
    }
  }
};



