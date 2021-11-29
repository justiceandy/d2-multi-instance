
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

export default function AccountEdit (routeState:any) {
  const accountId = routeState.match.params.accountId;
  const accountData = routeState.accounts[accountId];
  const accountName = accountData.display;

  
  //   // Item State (passed or initialized)
  const thisStateMachine = AccountEditStateMachine({ 
    accountId,
    ...accountData,
  });

  const [ state, send ]:any = useMachine(thisStateMachine);

  console.log(state.value);

  const deleteAccount = (e:any) => {
    console.log(e);
    e.preventDefault();
  }
  const nextAccount = (e:any) => {
    console.log(e);
    e.preventDefault();
  }
  const prevAccount = (e:any) => {
    console.log(e);
    e.preventDefault();
  }

  const navigateTo = ({ event, route }:any) => {
    event.preventDefault();
    send(route);
  }
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
            active={state.value}
            tabs={[
              { notify: navigateTo, route: 'general', label: 'General' },
              { notify: navigateTo, route: 'battlenet', label: 'Battle.Net' },
              { notify: navigateTo, route: 'client', label: 'Client' },
              { notify: navigateTo, route: 'window', label: 'Window' },
              { notify: navigateTo, route: 'hotkey', label: 'Hotkey' }
            ]}
         />
          { state.value === 'idle' ?
            <span>Loading</span>
          : null}
          { state.value === 'general' ?
            <AccountGeneralEdit {...accountData} />
          : null}
          { state.value === 'client' ?
            <AccountClientEdit {...accountData} />
          : null}
          { state.value === 'battlenet' ?
            <AccountBnetEdit {...accountData} />
          : null}
          { state.value === 'window' ?
            <AccountWindowEdit {...accountData} />
          : null}
          { state.value === 'hotkey' ?
            <AccountHotKeyEdit {...accountData} />
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

