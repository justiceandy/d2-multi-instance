
import './AccountEdit.css';
import AccountClientEdit from './components/client/AccountClient';
import AccountGeneralEdit from './components/general/AccountGeneral';
import AccountBnetEdit from './components/bnet/AccountBnet';
import AccountWindowEdit from './components/window/AccountWindow';
import AccountHotKeyEdit from './components/hotkey/AccountHotkey';
import Tabs from 'components/ui/tabs/Tabs';
import PageHeader from 'components/ui/page/header/PageHeader';
import PageFooterToolTip from 'components/ui/page/footer/tooltip/FooterTooltip';
import { mdiDelete, mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import {  useMachine } from '@xstate/react';
import AccountEditStateMachine from './state/AccountEditState'
import EditAccountFormFunctions from './libs/formFunctions';

export default function AccountEdit (routeState:any) {
  const accountId = routeState.match.params.accountId;
  const accountData = routeState.accounts[accountId];
  const accountName = accountData.display;

  //   // Item State (passed or initialized)
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

    console.log(state)
    return (
      <div className="AccountEdit Page ui-form-page">
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
              { notify: navigateTo, route: 'hotkey', label: 'Hotkey' }
            ]}
         />
          { route === 'idle' || state.value === 'idle' ?
            <span>Loading</span>
          : null}
          { route === 'general' ?
            <AccountGeneralEdit 
                account={state.context}
                onAttributeChanged={onAttributeChanged}
            />
          : null}
          { route === 'client' ?
            <AccountClientEdit
                account={state.context}
                onAttributeChanged={onAttributeChanged}
            />
          : null}
          { route === 'battlenet' ?
            <AccountBnetEdit
                account={state.context}
                state={componentState}
                onAttributeChanged={onAttributeChanged}
            />
          : null}
          { route === 'window' ?
            <AccountWindowEdit
                account={state.context}
                onAttributeChanged={onAttributeChanged}
            />
          : null}
          { route === 'hotkey' ?
            <AccountHotKeyEdit
                account={state.context}
                onAttributeChanged={onAttributeChanged}
            />
          : null }
        <PageFooterToolTip 
            text={"Save events occur on changes"}
            icons={[
              { icon: mdiArrowLeft, title: 'Back to Accounts', onClick: prevAccount },
              { icon: mdiArrowRight, title: 'Next Account', onClick: nextAccount },
            ]}
        />
      </div>
    );
  };

