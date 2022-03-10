import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import IntegrationItem from './IntegrationItem';

export default {
  title: 'app/experience/integrations/components/Item',
  component: IntegrationItem,
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <IntegrationItem {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  route: '/service/general',
  accounts: [

  ],
};



