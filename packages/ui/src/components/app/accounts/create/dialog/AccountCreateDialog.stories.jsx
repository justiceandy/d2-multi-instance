import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import CreateAccountDialog from './AccountCreateDialog';

export default {
  title: 'app/experience/account/components/AccountCreateDialog',
  component: CreateAccountDialog,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router>
      <CreateAccountDialog {...args} />
    </Router>
  )
};

export const Default = Template.bind({});
Default.args = {
    accounts: [],
    addAccount: () => true,
};



