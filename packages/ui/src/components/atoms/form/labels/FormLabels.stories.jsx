import React from 'react';
import FormLabels from './FormLabels';

export default {
  title: 'ui/form/labels/FormLabels',
  component: FormLabels,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
      <FormLabels {...args} />
  )
};

export const General = Template.bind({});
General.args = {
  text: 'General Notification',
  items: [
    'Enabled:',
    'Modifier:',
    'Key:',
  ]
};

