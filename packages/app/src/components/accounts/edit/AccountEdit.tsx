
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

export default function AccountEdit () {
    return (
      <div className="AccountEdit">
        <h1>
          <label> Accounts </label>   
           <Icon className="chevIcon" path={mdiChevronRight}
               title="Home" 
               size={1} />
            <label> Edit </label>  
         </h1>
        <div className="TabContainer">
          <ul>
           <Link to="/accounts/edit/general" className="General">
            <li>General</li>
            </Link>
            <Link to="/accounts/edit/bnet" className="BattleNet"><li>Battle Net</li></Link>
            <Link to="/accounts/edit/client" className="Client"><li>Client Args</li></Link>
            <Link to="/accounts/edit/window"  className="Window"><li>Window</li></Link>
            <Link to="/accounts/edit/hotkey"  className="Window"><li>Hotkey</li></Link>
          </ul>
        </div>
        <div className="ContentContainer">
          <Switch>
            <Route path="/accounts/edit/general" component={AccountGeneralEdit} />
            <Route path="/accounts/edit/client" component={AccountClientEdit} />
            <Route path="/accounts/edit/bnet" component={AccountBnetEdit} />
            <Route path="/accounts/edit/window" component={AccountWindowEdit} />
            <Route path="/accounts/edit/hotkey" component={AccountHotKeyEdit} />
          </Switch>
        </div>
      </div>
    );
  };

