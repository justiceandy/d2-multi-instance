import './AccountList.css';
import { mdiAccountPlus, mdiExpandAllOutline} from '@mdi/js';
import AccountItem from '../item/AccountItem';
import PageHeader from 'components/ui/page/header/PageHeader';
import PageFooterToolTip from 'components/ui/page/footer/tooltip/FooterTooltip';
import PageLoader from 'components/ui/page/loader/PageLoader';
import AccountListStateMachine from './state/AccountListState';
import AccountListQueStateMachine from './state/AccountListQueState';
import {  useMachine } from '@xstate/react';

let existingAccountListState:any = null;
let existingAccountQue:any = null;

export default function AccountList ({ accounts = [], AccountState = null, QueState = null  }:any) {

    const thisListState = AccountState || existingAccountListState || AccountListStateMachine();
          existingAccountListState = thisListState;
  
    const thisQueState = QueState || existingAccountQue || AccountListQueStateMachine();
          existingAccountQue = thisQueState;

    const [ state, send ] = useMachine(thisListState);

    send('LOAD');

    const showAccountList = (accounts:any) => {
      return (
        <ul>
            {accounts.map(({ display }:any, i:any) => 
              <li key={i}>
                <AccountItem 
                    id={i} 
                    name={display} 
                    QueState={thisQueState}
                />
              </li>
            )}
        </ul> 
      )
    }
    const showLoading = () => {
      return (
        <PageLoader text="Loading Accounts" />
      )
    }

    return (
      <div className="AccountList">
        <PageHeader 
           breadcrumbs={[
             'Account List',
           ]}
           icons={[
             { icon: mdiAccountPlus, title: 'Add Acccount', url: '/accounts/create' },
             { icon: mdiExpandAllOutline, title: 'Launch All', url: '/accounts/create' },
           ]}
        />
        <div className="AccountListContainer">
          { /*@ts-expect-error */
            state.context.accounts2 ? showAccountList(accounts) : showLoading() }
        </div>
        <PageFooterToolTip 
            text={"Only 1 account can launch at a time"}
        />
      </div>
    );
  };