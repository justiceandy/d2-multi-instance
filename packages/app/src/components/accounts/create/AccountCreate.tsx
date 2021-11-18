
import './AccountCreate.css';
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import AccountClientCreate from './client/AccountClient';
import AccountGeneralCreate from './general/AccountGeneral';
import AccountBnetCreate from './bnet/AccountBnet';
import AccountWindowCreate from './window/AccountWindow';
import AccountHotKeyCreate from './hotkey/AccountHotkey';

export default function AccountCreate () {
    return (
      <div className="AccountEdit">
        <h1>
          <label> Accounts </label>   
           <Icon className="chevIcon" path={mdiChevronRight}
               title="Home" 
               size={1} />
            <label> Create </label>  
         </h1>
        <div className="TabContainer">
          <ul>
            <li><Link to="/accounts/create/general" className="General">General</Link></li>
            <li><Link to="/accounts/create/bnet" className="BattleNet">Battle Net</Link></li>
            <li><Link to="/accounts/create/client" className="Client">Client Args</Link></li>
            <li><Link to="/accounts/create/window"  className="Window">Window</Link></li>
            <li><Link to="/accounts/create/hotkey"  className="Window">Hotkey</Link></li>
          </ul>
        </div>
        <div className="ContentContainer">
          <Switch>
            <Route path="/accounts/edit/general" component={AccountGeneralCreate} />
            <Route path="/accounts/edit/client" component={AccountClientCreate} />
            <Route path="/accounts/edit/bnet" component={AccountBnetCreate} />
            <Route path="/accounts/edit/window" component={AccountWindowCreate} />
            <Route path="/accounts/edit/hotkey" component={AccountHotKeyCreate} />
          </Switch>
        </div>
      </div>
    );
  };

