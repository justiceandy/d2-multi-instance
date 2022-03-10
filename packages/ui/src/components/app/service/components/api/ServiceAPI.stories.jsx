import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import ServiceAPI from './ServiceAPI';

export default {
  title: 'app/experience/service/components/Api',
  component: ServiceAPI,

};

const Template = (args) => {
  return (
    <Router>
      <ServiceAPI {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
   
};



