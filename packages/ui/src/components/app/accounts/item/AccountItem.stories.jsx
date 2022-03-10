import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AccountItem from './AccountItem';
import AccountItemStateMachine from './state/AccountItemState';
import AccountListQueStateMachine from '../list/state/AccountListQueState'


const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

// Mocked IPC Responses
const mockedIPC = {
  openD2: { src: async () => {
    await waitFor(1500);
    return true;
  }},
  isStarted: { src: async () => {
    await waitFor(1500);
    return true;
  }},
  waitForToken: { src: async () => {
    await waitFor(1500);
    return true;
  }},
  killProcess: { src: async () => {
    await waitFor(1500);
    return true;
  }},
  isKilled: { src: async () => {
    await waitFor(1500);
    return true;
  }},
  storeToken: { src: async () => {
    await waitFor(1500);
    return true;
  }},
};

const QueMachine = AccountListQueStateMachine({
  api: mockedIPC,
});

export default {
  title: 'app/experience/account/components/AccountItem',
  component: AccountItem,
  argTypes: {
    QueState:{
      options: ['Active'],
      control: { type: 'select' },
      mapping: {
        Active: AccountListQueStateMachine({
          api: mockedIPC,
        }),
      },
    },
    ItemState:{
      options: ['Loading', 'Mock'],
      control: { type: 'select' },
      mapping: {
        Loading: AccountItemStateMachine({
          index: 0,
          QueMachine,
        }),
        Mock: AccountItemStateMachine({
          index: 0,
          QueMachine,
          api: mockedIPC,
        }),
      },
     
    },
  },
};

const Template = (args) => {
  return (
    <Router initialEntries={[args.route]}>
      <AccountItem {...args} />
    </Router>
  )
};


export const Main = Template.bind({});
Main.args = {
  route: '/service/general',
  name: 'example1',
  id: 0,
  ItemState: 'Mock',
  QueState: 'Active',
};



export const Secondary = Template.bind({});
Secondary.args = {
  route: '/service/general',
  ItemState: 'Mock',
  name: 'example2',
  id: 1,
  QueState: 'Active',
};



