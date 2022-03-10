import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AccountClient from './AccountClient';

export default {
  title: 'app/experience/account/components/AccountEdit/components/AccountClient',
  component: AccountClient,
};

const Template = (args) => {
  return (
    <Router>
      <AccountClient {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  account: {
    client: {
      d2r: 'G:\\Blizzard\\Diablo II Resurrected\\D2R.exe',
      launch: {
          pre: 'echo test',
          post: 'echo test',
      },
      skipIntro: true,
      waitInQue: true,
    }
  }
};



