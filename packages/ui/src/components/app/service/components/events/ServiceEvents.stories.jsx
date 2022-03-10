import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import ServiceEvents from './ServiceEvents';

export default {
  title: 'app/experience/service/components/Events',
  component: ServiceEvents,

};

const Template = (args) => {
  return (
    <Router>
      <ServiceEvents {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
   
};



