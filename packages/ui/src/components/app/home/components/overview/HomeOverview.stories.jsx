import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import HomeOverview from './HomeOverview';

export default {
  title: 'app/experience/home/components/HomeOverview',
  component: HomeOverview,
  argTypes: {
    changeWindowTitles: { 
      control: 'boolean',
    },
    automatedLogin: { 
      control: 'boolean',
    },
    kernelDriver: { 
      control: 'boolean',
    },
    notifications: { 
      control: 'boolean',
    },
  },
};

const Template = (args) => {
  return (
    <Router>
      <HomeOverview {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {};



