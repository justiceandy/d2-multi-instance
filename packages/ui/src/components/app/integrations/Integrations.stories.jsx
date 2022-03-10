import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Integrations from './Integrations';

export default {
  title: 'app/experience/integrations',
  component: Integrations,
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <Integrations {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  route: '/service/general',
  accounts: [

  ],
};



