import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import FormActions from './FormActions';

export default {
  title: 'ui/form/actions/FormActions',
  component: FormActions,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router>
      <FormActions {...args} />
    </Router>
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

