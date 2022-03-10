import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AccountList from './AccountList';
import AccountListStateMachine from './state/AccountListState';

export default {
  title: 'app/experience/account/components/AccountList',
  component: AccountList,
  argTypes: {
    AccountState:{
      options: ['Loading', 'Mock'],
      mapping: {
        Loading: AccountListStateMachine({
          unique: 'ListLoadingStory',
        }),
        Mock: AccountListStateMachine({
          unique: 'ListMockStory',
          api: {
            getProcesses: async () => [
              { name: 'Example1', display: 'test1', id: 0},
              { name: 'Example2', display: 'test2', id: 1},
              { name: 'Example3', display: 'test3', id: 2},
              { name: 'Example4', display: 'test4', id: 3},
              { name: 'Example5', display: 'test5', id: 4},
              { name: 'Example6', display: 'test6', id: 5},
              { name: 'Example7', display: 'test7', id: 6},
              { name: 'Example8', display: 'test8', id: 7},
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
      <AccountList {...args} />
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
  accounts: [

  ],
};



