import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Service from './Service';

export default {
  title: 'app/experience/Service',
  component: Service,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <Service {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  route: '/service/general',
  accounts: [

  ],
};
