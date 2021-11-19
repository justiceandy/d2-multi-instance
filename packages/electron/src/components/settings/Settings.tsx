import './Settings.css';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import SettingsApiEdit from './api/SettingsAPI';
import SettingsDriverEdit from './driver/SettingsDriver';
import SettingsShortcutEdit from './shortcuts/SettingsShortcut';
import SettingsGeneralEdit from './general/SettingsGeneral';

export default function Settings (state:any) {
  console.log(state)
    return (
        <div className="SettingsPage Page">
          <h1>Settings</h1>
          <div className="TabContainer">
            <ul>
              <Link to={`/settings/general`} className="General"><li>General</li></Link>
              <Link to={`/settings/api`} className="General"><li>API</li></Link>
              <Link to={`/settings/shortcuts`} className="General"><li>Shortcuts</li></Link>
              <Link to={`/settings/driver`} className="General"><li>Kernel Driver</li></Link>
            </ul>
          </div>
          <Switch>
            <Route path="/settings/general"
                   render={() => <SettingsGeneralEdit {...state} />} />
            <Route path="/settings/api"
                   render={() => <SettingsApiEdit {...state} />} />
            <Route path="/settings/shortcuts"
                   render={() => <SettingsShortcutEdit {...state} />} />
            <Route path="/settings/driver" 
                   render={() => <SettingsDriverEdit {...state} />} />
          </Switch>
           <p className="PageToolTip">These override account level settings</p>
        </div>
    );
  };