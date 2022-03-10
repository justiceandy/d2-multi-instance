import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Menu from './Menu';

export default {
  title: 'app/layout/Menu',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router>
      <Menu {...args} />
    </Router>
  )
};

export const Default = Template.bind({});
Default.args = {
  rank: 'Button',
  authenticated: false,
};


