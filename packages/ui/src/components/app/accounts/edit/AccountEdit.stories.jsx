import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AccountEdit from './AccountEdit';

export default {
  title: 'app/experience/account/components/AccountEdit',
  component: AccountEdit,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <AccountEdit {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  route: '/service/general',
  match: {
    params: { accountId: 0 },
  },
  accounts: [
    {
      display: 'test'
    }
  ],
};



