import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import ServiceStorage from './ServiceStorage';

export default {
  title: 'app/experience/service/components/Storage',
  component: ServiceStorage,

};

const Template = (args) => {
  return (
    <Router>
      <ServiceStorage {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
   
};



