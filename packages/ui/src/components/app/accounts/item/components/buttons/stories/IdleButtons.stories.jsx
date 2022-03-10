import React from 'react';
import {
  IdleButtons,
} from '../variants';
import ActionItemWrapper from './template/ActionItemWrapper';

export default {
  title: 'app/experience/account/components/AccountItem/ItemActionButtons/Mock',
};

const IdleTemplate = (args) => {
  return (
    <ActionItemWrapper>
      <IdleButtons {...args} />
    </ActionItemWrapper>
  )
};
export const Idle = IdleTemplate.bind({});
Idle.component = IdleButtons;
Idle.storyName  = 'State/Idle';
Idle.args = {
  id: 0,
  state: {
    value: 'idle'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};
