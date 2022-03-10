import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import ServiceOverview from './ServiceOverview';

export default {
  title: 'app/experience/service/components/Overview',
  component: ServiceOverview,

};

const Template = (args) => {
  return (
    <Router>
      <ServiceOverview {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
   
};



