import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Settings from './Settings';

export default {
  title: 'app/experience/settings',
  component: Settings,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <Settings {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  route: '/settings',
  accounts: [

  ],
};


