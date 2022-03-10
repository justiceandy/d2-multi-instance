import React from 'react';
import {
  LaunchingButtons,
} from '../variants';
import ActionItemWrapper from './template/ActionItemWrapper';
import { IconToolTip } from '../../../AccountItem.styled';

export default {
  title: 'app/experience/account/components/AccountItem/ItemActionButtons/Mock',
};

const IdleTemplate = (args) => {
  return (
    <ActionItemWrapper>
      <IconToolTip>{args.state.context.tooltip}</IconToolTip>
      <LaunchingButtons {...args} />
    </ActionItemWrapper>
  )
};
export const Launching = IdleTemplate.bind({});
Launching.component = LaunchingButtons;
Launching.storyName  = 'State/Launching';
Launching.args = {
  id: 0,
  state: {
    value: 'starting',
    context: {
      tooltip: 'Starting',
    }
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};
