import React from 'react';
import {
  TerminatingButtons,
} from '../variants';
import ActionItemWrapper from './template/ActionItemWrapper';

export default {
  title: 'app/experience/account/components/AccountItem/ItemActionButtons/Mock',
};

const IdleTemplate = (args) => {
  return (
    <ActionItemWrapper>
      <TerminatingButtons {...args} />
    </ActionItemWrapper>
  )
};

export const Terminating = IdleTemplate.bind({});
Terminating.component = TerminatingButtons;
Terminating.storyName  = 'State/Terminating';
Terminating.args = {
  id: 0,
  state: {
    value: 'terminating'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};


export const Killed = IdleTemplate.bind({});
Killed.component = TerminatingButtons;
Killed.storyName  = 'State/Killed';
Killed.args = {
  id: 0,
  state: {
    value: 'killed'
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};
