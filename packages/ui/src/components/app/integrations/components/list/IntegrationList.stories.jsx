import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import IntegrationList from './IntegrationList';

export default {
  title: 'app/experience/integrations/components/List',
  component: IntegrationList,
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <IntegrationList {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  route: '/service/general',
  accounts: [

  ],
};



