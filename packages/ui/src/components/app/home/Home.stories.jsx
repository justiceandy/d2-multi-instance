import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from './Home';
import AccountListStateMachine from '../accounts/list/state/AccountListState';

export default {
  title: 'app/experience/home',
  component: Home,
  argTypes: {
    AccountState:{
      control: 'select',
      options: ['Loading', 'Mock', 'Overflow'],
      mapping: {
        Loading: AccountListStateMachine({}),
        Mock: AccountListStateMachine({
          api: {
            getProcesses: async () => [
              { name: 'Example1', display: 'test1'},
              { name: 'Example2', display: 'test2'},
              { name: 'Example3', display: 'test3'},
              { name: 'Example4', display: 'test4'},
            ],
          },
        }),
        Overflow: AccountListStateMachine({
          api: {
            getProcesses: async () => [
              { name: 'Example1', display: 'test1'},
              { name: 'Example2', display: 'test2'},
              { name: 'Example3', display: 'test3'},
              { name: 'Example4', display: 'test4'},
              { name: 'Example5', display: 'test5'},
              { name: 'Example6', display: 'test6'},
              { name: 'Example7', display: 'test7'},
              { name: 'Example8', display: 'test8'},
              { name: 'Example9', display: 'test9'},
              { name: 'Example10', display: 'test10'},
              { name: 'Example11', display: 'test11'},
              { name: 'Example12', display: 'test12'},
              { name: 'Example13', display: 'test13'},
            ],
          },
        }),
      },
    },
  },
};

const Template = (args) => {
  return (
    <Router>
      <Home {...args} />
    </Router>
  )
};

export const Loading = Template.bind({});
Loading.args = {
  AccountState: 'Loading',
};



export const Loaded = Template.bind({});
Loaded.args = {
  AccountState: 'Mock',
};

export const Overflow = Template.bind({});
Overflow.args = {
  AccountState: 'Overflow',
};