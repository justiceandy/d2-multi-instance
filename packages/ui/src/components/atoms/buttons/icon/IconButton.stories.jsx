import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import IconButton from './IconButton';

export default {
  title: 'ui/buttons/IconButton',
  component: IconButton,
  argTypes: {
    color: { 
      options: ['Transparent', 'Green', 'Blue', 'Grey'],
      control: { type: 'select' },
      mapping: {
        Transparent: false,
        Green: 'green',
        Blue: 'blue',
        Grey: 'grey',
      }
    },
  },
};

const Template = (args) => {
  return (
    <Router>
      <IconButton {...args} />
    </Router>
  )
};

export const Transparent = Template.bind({});
Transparent.args = {
    color: 'Transparent'
};

export const Green = Template.bind({});
Green.args = {
    color: 'Green'
};

export const Blue = Template.bind({});
Blue.args = {
    color: 'Blue'
};

export const Grey = Template.bind({});
Grey.args = {
    color: 'Grey'
};
