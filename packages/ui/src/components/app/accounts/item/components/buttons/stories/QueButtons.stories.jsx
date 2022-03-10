import React from 'react';
import {
  QueButtons,
} from '../variants';
import ActionItemWrapper from './template/ActionItemWrapper';

export default {
  title: 'app/experience/account/components/AccountItem/ItemActionButtons/Mock',
};

const IdleTemplate = (args) => {
  return (
    <ActionItemWrapper>
      <QueButtons {...args} />
    </ActionItemWrapper>
  )
};
export const Que = IdleTemplate.bind({});
Que.component = QueButtons;
Que.storyName  = 'State/Que-Add';
Que.args = {
  id: 1,
  state: {
    value: 'idle'
  },
  qState: {
    context: {
      que: [
        0,
      ],
      selected: 0,
    }
  }
};
