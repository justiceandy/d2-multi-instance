
import { useMachine } from '@xstate/react';
import { mdiPower } from '@mdi/js';

import { PageHeader, PageLoader, PageContent, Tabs } from '../../../atoms';
import { Container } from './AccountList.styled';

import { AccountListStateMachine, AccountListQueStateMachine } from './state';
import { AccountCreateDialog } from '../create';

import {
  RegionSelect,
  AccountLocalList,
  DragSwitch,
  AccountSquads,
  AccountRemote,
  SortableAccounts,
} from './components';


import getStatePage from './libs/getStatePage';

let existingAccountListState:any = null;
let existingAccountQue:any = null;

/** 
 *  AccountList:
 *  Returns stored accounts
 **/
export default function AccountList ({ AccountState = null, QueState = null, api = null  }:any) {
   

    const thisListState = AccountState || existingAccountListState || AccountListStateMachine({ api });
          existingAccountListState = thisListState;
          
    const thisQueState = QueState || existingAccountQue || AccountListQueStateMachine();
          existingAccountQue = thisQueState;

    const [ state, send ] = useMachine(thisListState);
    /*@ts-expect-error */
    const { accounts = [], dragEnabled = false } = state.context;

    send('LOAD');

    const localPage = (context) => {
      if(state.value[context.state] !== 'loaded') return showLoading();
      if(state.value[context.state] === 'loaded') return showAccountList();
    }
    const squadPage = (context) => {
      if(state.value[context.state] !== 'loaded') return showLoading();
      if(state.value[context.state] === 'loaded') return AccountSquads();
    }
    const remotePage = (context) => {
      if(state.value[context.state] !== 'loaded') return showLoading();
      if(state.value[context.state] === 'loaded') return AccountRemote();
    }
    const showAccountList = () => dragEnabled ?
        SortableAccounts({ list: accounts, queState: thisQueState })
      : AccountLocalList({ accounts, queState: thisQueState });
   
    const showLoading = () => (
        <PageLoader text="Loading Accounts" />
    )

    const page = getStatePage(state);

    return (
      <PageContent>
        <PageHeader 
           icon={mdiPower}
           breadcrumbs={[ 'Account Launcher' ]}
           children={[
              <RegionSelect value={'Default'} onChange={() => true}  />,
              <DragSwitch value={true} />,
              <AccountCreateDialog 
                accounts={accounts}
                addAccount={() => true}
                iconOnly
              />
          ]}
        />
        <Container>
          <Tabs 
              type="state"
              active={page.state}
              tabs={[
                { notify: () => send('LOCAL'), route: 'local', label: 'Local' },
                { notify: () => send('SQUADS'), route: 'squads', label: 'Squads' },
                { notify: () => send('REMOTE'), route: 'remote', label: 'Remote' },
              ]}
          />
          { page.state === 'local' ? localPage(page) : null }
          { page.state === 'squads' ? squadPage(page) : null }
          { page.state === 'remote' ? remotePage(page) : null }
        </Container>
      </PageContent>
    );
  };
