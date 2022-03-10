import React from 'react';
import App from './App';

export default {
  title: 'app/Electron',
  component: App,
};

const Template = (args) => {
  return (
    <App />
  )
};

export const Electron = Template.bind({});
