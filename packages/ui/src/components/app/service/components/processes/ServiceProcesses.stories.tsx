import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import ServiceProcesses from './ServiceProcesses';

export default {
  title: 'app/experience/service/components/Processes',
  component: ServiceProcesses,

};

const Template = (args) => {
  return (
    <Router>
      <ServiceProcesses {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
   
};



