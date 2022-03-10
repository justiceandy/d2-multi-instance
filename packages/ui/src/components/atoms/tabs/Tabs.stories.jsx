import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Tabs from './Tabs';

export default {
  title: 'ui/tabs/Tabs',
  component: Tabs,
  argTypes: {
    type: { 
      options: ['state', 'url'],
      control: { type: 'select' },
      mapping: {
        state: 'state',
        url: 'url',
      }
    },
    active: { 
      options: ['general', 'battlenet', 'client', 'window', 'hotkey'],
      control: { type: 'select' },
      mapping: {
        general: 'general',
        battlenet: 'battlenet',
        client: 'client',
        hotkey: 'hotkey',
        window: 'window',
      }
    },
  },
};

const Template = (args) => {
  return (
    <Router>
      <Tabs {...args} />
    </Router>
  )
};

export const Default = Template.bind({});
Default.args = {
    type: 'state',
    active: 'general',
    tabs: [
      { route: 'general', label: 'General' },
      { route: 'battlenet', label: 'Battle.Net' },
      { route: 'client', label: 'Client' },
      { route: 'window', label: 'Window' },
      { route: 'hotkey', label: 'Hotkey' }
    ]
};


