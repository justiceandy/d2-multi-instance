import React from 'react';
import {
  ActiveButtons,
  RunningButtons,
} from '../variants';
import ActionItemWrapper from './template/ActionItemWrapper';

export default {
  title: 'app/experience/account/components/AccountItem/ItemActionButtons/Mock',
};

const IdleTemplate = (args) => {
  return (
    <ActionItemWrapper>
      <div className="StatusIcons">
      <ActiveButtons {...args} />
      </div>
      <RunningButtons {...args} />
    </ActionItemWrapper>
  )
};
export const Running = IdleTemplate.bind({});
Running.component = RunningButtons;
Running.storyName  = 'State/Running';
Running.args = {
  id: 0,
  state: {
    value: 'running'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};
