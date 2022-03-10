import React from 'react';
import PageLoader from './PageLoader';

export default {
  title: 'ui/page/loader/PageLoader',
  component: PageLoader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return ( <PageLoader {...args} /> )
};

export const Default = Template.bind({});
Default.args = {};


export const Text = Template.bind({});
Text.args = {
  text: 'Loading',
};
