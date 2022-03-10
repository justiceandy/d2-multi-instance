import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import IntegrationMarketplace from './IntegrationMarketplace';

export default {
  title: 'app/experience/integrations/components/Marketplace',
  component: IntegrationMarketplace,
};

const Template = (args) => {
  return (
    <Router>
      <IntegrationMarketplace {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  accounts: [

  ],
};



