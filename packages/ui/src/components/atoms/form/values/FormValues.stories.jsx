import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import FormValues from './FormValues';
import { modifiers, letters } from '../../../app/accounts/edit/components/hotkey/libs/defaults';

export default {
  title: 'ui/form/values/FormValues',
  component: FormValues,
  argTypes: {
    rows:{
      options: ['checkbox', 'select', 'text', 'grid','password', 'action', 'empty'],
      control: { type: 'select' },
      mapping: {
        checkbox: [
          { type: 'checkbox', name: "main", value: true, onChange: () => true },
        ],
        select: [
          { 
            type: 'select', 
            name: "main", 
            options: modifiers,
            value: 'none', 
            onChange: () => true 
          },
        ],
        text: [
          { 
            type: 'text', 
            name: "main",
            placeholder: '', 
            defaultValue: true, 
            onChange: () => true 
          },
        ],
        grid: [
          { 
            type: 'grid', 
            name: "main", 
            rows: [
              { type: 'checkbox', name: 'Example1', title: 'Example1' },
              { type: 'checkbox', name: 'Example2', title: 'Example2' },
              { type: 'checkbox', name: 'Example3', title: 'Example3' }
            ],
            onChange: () => true 
          },
        ],
        password: [
          { 
            type: 'password', 
            name: "main", 
            value: true, onChange: () => true 
          },
        ],
        action: [
          { type: 'action', label: "action", onChange: () => true },
        ],
        empty: [
          { type: 'empty' },
        ],
      },
    },
  },
};

const Template = (args) => {
  return (
    <Router>
      <FormValues {...args} />
    </Router>
  )
};

export const General = Template.bind({});
General.args = {
  rows: [
    { type: 'checkbox', name: "main", value: true, onChange: () => true },
    { 
      type: 'select', 
      name: "main", 
      options: modifiers,
      value: 'none', 
      onChange: () => true 
    },
    { 
      type: 'text', 
      name: "main",
      placeholder: '', 
      defaultValue: true, 
      onChange: () => true 
    },
    { 
      type: 'grid', 
      name: "main", 
      rows: [
        { type: 'checkbox', name: 'Example1', title: 'Example1' },
        { type: 'checkbox', name: 'Example2', title: 'Example2' },
        { type: 'checkbox', name: 'Example3', title: 'Example3' }
      ],
      onChange: () => true 
    },
    { 
      type: 'password', 
      name: "main", 
      value: true, onChange: () => true 
    },
    { type: 'action', label: "action", onChange: () => true },
    { type: 'empty' },
  ]
};


export const Checkbox = Template.bind({});
Checkbox.args = {
  rows: 'checkbox'
};

export const Select = Template.bind({});
Select.args = {
  rows: 'select'
};

export const Text = Template.bind({});
Text.args = {
  rows: 'text'
};

export const Grid = Template.bind({});
Grid.args = {
  rows: 'grid'
};

export const Password = Template.bind({});
Password.args = {
  rows: 'password'
};

export const Action = Template.bind({});
Action.args = {
  rows: 'action'
};

export const Empty = Template.bind({});
Empty.args = {
  rows: 'empty'
};