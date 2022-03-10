import React from 'react';
import {
  ActiveButtons,
} from '../variants';
import ActionItemWrapper from './template/ActionItemWrapper';

export default {
  title: 'app/experience/account/components/AccountItem/ItemActionButtons/Mock',
};


const IdleTemplate = (args) => {
  return (
    <ActionItemWrapper>
      <ActiveButtons {...args} />
    </ActionItemWrapper>
  )
};
export const Active = IdleTemplate.bind({});
Active.component = ActiveButtons;
Active.storyName  = 'State/Active';
Active.args = {
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
