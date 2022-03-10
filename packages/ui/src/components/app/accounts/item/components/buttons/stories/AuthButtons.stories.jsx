import React from 'react';
import {
  AuthButtons,
} from '../variants';
import ActionItemWrapper from './template/ActionItemWrapper';

export default {
  title: 'app/experience/account/components/AccountItem/ItemActionButtons/Mock',
};

/*
   'starting': mdiHexagonSlice1,
    'started': mdiHexagonSlice2,
    'token1': mdiHexagonSlice3,
    'token2': mdiHexagonSlice4,
    'tokensStored': mdiHexagonSlice5,
    'running': mdiHexagonSlice6,
*/

const IdleTemplate = (args) => {
  return (
    <ActionItemWrapper>
      <AuthButtons {...args} />
    </ActionItemWrapper>
  )
};
export const Auth = IdleTemplate.bind({});
Auth.component = AuthButtons;
Auth.storyName  = 'State/Auth';
Auth.args = {
  id: 0,
  state: {
    value: 'authenticate',
    context: {
      tooltip: 'starting',
    }
  },
  qState: {
    context: {
      que: [],
      selected: 0,
    }
  }
};
