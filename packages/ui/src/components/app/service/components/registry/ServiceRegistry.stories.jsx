import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import ServiceRegistry from './ServiceRegistry';

export default {
  title: 'app/experience/service/components/Registry',
  component: ServiceRegistry,

};

const Template = (args) => {
  return (
    <Router>
      <ServiceRegistry {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
   
};



