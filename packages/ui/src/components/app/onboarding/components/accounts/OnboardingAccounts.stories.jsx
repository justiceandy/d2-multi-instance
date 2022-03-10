import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import OnboardingAccounts from './OnboardingAccounts';

export default {
  title: 'app/experience/onboarding/components/steps/Accounts',
  component: OnboardingAccounts,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  return (
    <Router>
      <OnboardingAccounts {...args} />
    </Router>
  )
};

export const Default = Template.bind({});
Default.args = {
    accounts: [],
    verifyAccount: () => true,
    addAccount: () => true,
    removeAccount: () => true,
};



export const Multiple = Template.bind({});
Multiple.args = {
    accounts: [
      { name: 'Test1', folder: 'G:\\Blizzard\\Diablo II Resurrected 1' },
      { name: 'Test2', folder: 'G:\\Blizzard\\Diablo II Resurrected 2' },
      { name: 'Test3', folder: 'G:\\Blizzard\\Diablo II Resurrected 3' },
      { name: 'Test4', folder: 'G:\\Blizzard\\Diablo II Resurrected 4' },
      { name: 'Test5', folder: 'G:\\Blizzard\\Diablo II Resurrected 5' },
    ],
    verifyAccount: () => true,
    addAccount: () => true,
    removeAccount: () => true,
};
