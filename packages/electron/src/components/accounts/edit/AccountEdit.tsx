
import './AccountEdit.css';
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import AccountClientEdit from './client/AccountClient';
import AccountGeneralEdit from './general/AccountGeneral';
import AccountBnetEdit from './bnet/AccountBnet';
import AccountWindowEdit from './window/AccountWindow';
import AccountHotKeyEdit from './hotkey/AccountHotkey';

export default function AccountEdit (state:any) {
  const accountId = state.match.params.accountId;
  const accountData = state.accounts[accountId];
  const accountName = accountData.display;

    return (
      <div className="AccountEdit Page">
        <h1>
          <label> Account </label>   
           <Icon className="chevIcon" path={mdiChevronRight}
               title="Home" 
               size={1} />
            <label>{accountName} </label>  
         </h1>
        <div className="TabContainer">
          <ul>
            <Link to={`/accounts/${accountId}/edit/general`} className="General"><li>General</li></Link>
            <Link to={`/accounts/${accountId}/edit/bnet`} className="BattleNet"><li>Battle Net</li></Link>
            <Link to={`/accounts/${accountId}/edit/client`} className="Client"><li>Client Args</li></Link>
            <Link to={`/accounts/${accountId}/edit/window`}  className="Window"><li>Window</li></Link>
            <Link to={`/accounts/${accountId}/edit/hotkey`}  className="Window"><li>Hotkey</li></Link>
          </ul>
        </div>
        <div className="ContentContainer">
          <Switch>
            <Route path="/accounts/:accountId/edit/general"
                   render={() => <AccountGeneralEdit {...accountData} />} />
            <Route path="/accounts/:accountId/edit/client"
                   render={() => <AccountClientEdit {...accountData} />} /> 
            <Route path="/accounts/:accountId/edit/bnet"
                   render={() => <AccountBnetEdit {...accountData} />} />
            <Route path="/accounts/:accountId/edit/window"
                   render={() => <AccountWindowEdit {...accountData} />} />
            <Route path="/accounts/:accountId/edit/hotkey" 
                   render={() => <AccountHotKeyEdit {...accountData} />} />
          </Switch>
        </div>
      </div>
    );
  };

