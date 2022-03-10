import { mdiDelete, mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import {  useMachine } from '@xstate/react';

import { Tabs, PageHeader, FooterTooltip, PageContent, PageLoader } from '../../../atoms';

import {
  AccountBnet,
  AccountClient,
  AccountGeneral,
  AccountHotkey,
  AccountWindow,
} from './components';

import AccountEditStateMachine from './state/AccountEditState'
import EditAccountFormFunctions from './libs/formFunctions';

import './AccountEdit.css';
/*
  Account Edit Component
*/
export default function AccountEdit (routeState:any) {
  const accountId = routeState.match.params.accountId;
  const accountData = routeState.accounts[accountId];
  const accountName = accountData.display;

  const thisStateMachine = AccountEditStateMachine({ 
    name: accountName,
  });

  const [ state, send ]:any = useMachine(thisStateMachine);

  const {       
    deleteAccount,
    onAttributeChanged,
    nextAccount,
    prevAccount,
    navigateTo
  } = EditAccountFormFunctions(send, state);

  const route = typeof state.value === 'object' ? 
      Object.keys(state.value)[0]
    : state.value;

  const componentState = typeof state.value === 'object' ? 
      state.value[route] 
    : state.value;

    return (
      <PageContent overlay={true} container={true} form={true}>
        <PageHeader 
           breadcrumbs={[
             'Account',
             accountName,
           ]}
           icons={[
             { icon: mdiDelete, title: 'Delete Account', onClick: deleteAccount },
           ]}
        />
        <Tabs 
            type="state"
            active={route}
            tabs={[
              { notify: navigateTo, route: 'general', label: 'General' },
              { notify: navigateTo, route: 'battlenet', label: 'Battle.Net' },
              { notify: navigateTo, route: 'client', label: 'Client' },
              { notify: navigateTo, route: 'window', label: 'Window' },
              { notify: navigateTo, route: 'hotkey', label: 'Hotkey' },
              { notify: navigateTo, route: 'plugin', label: 'Plug-ins' }
            ]}
         />
          { route === 'idle' || state.value === 'idle' ?
            <PageLoader text={'Fetching Account Data'} />
          : null}
          { route === 'general' ?
            <AccountGeneral
                account={state.context}
                onAttributeChanged={onAttributeChanged}
            />
          : null}
          { route === 'client' ?
            <AccountClient
                account={state.context}
                onAttributeChanged={onAttributeChanged}
            />
          : null}
          { route === 'battlenet' ?
            <AccountBnet
                account={state.context}
                state={componentState}
                onAttributeChanged={onAttributeChanged}
            />
          : null}
          { route === 'window' ?
            <AccountWindow
                account={state.context}
                onAttributeChanged={onAttributeChanged}
            />
          : null}
          { route === 'hotkey' ?
            <AccountHotkey
                account={state.context}
                onAttributeChanged={onAttributeChanged}
            />
          : null }
        <FooterTooltip 
            text={"Save events occur on changes"}
            icons={[
              { icon: mdiArrowLeft, title: 'Back to Accounts', onClick: prevAccount },
              { icon: mdiArrowRight, title: 'Next Account', onClick: nextAccount },
            ]}
        />
      </PageContent>
    );
  };

