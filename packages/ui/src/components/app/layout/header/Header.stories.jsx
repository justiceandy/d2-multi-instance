import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'app/layout/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <Router>
      <Header {...args} />
    </Router>
  )
};

export const Anonymous = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Anonymous.args = {
  rank: 'Anonymous',
  authenticated: false,
};


export const Authenticated = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Authenticated.args = {
  rank: 'Premium',
  authenticated: true,
};

