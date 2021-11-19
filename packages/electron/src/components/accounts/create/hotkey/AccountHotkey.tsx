import { Link } from 'react-router-dom';

import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline } from '@mdi/js';

import './AccountHotkey.css';

const saveAccount = async (e:any) => {
  e.preventDefault();
  console.log('Saving')
  return true;
}


export default function AccountHotKeyCreate () {
    return (
      <div className="AccountClient">
        <div className="FormLabels">
        <ul>
            <li>Enabled:</li>
            <li>Modifier:</li>
            <li>Key:</li>
        </ul>
        </div>
        <div className="FormValues">
        <ul>
           <li><Icon className="MenuAddIcon" path={mdiCheckboxBlankOutline}
              title="Add Acccount"
              size={1} /></li>
        </ul>
        </div>
        <div className="FormAction">
          <p>Hotkeys are global</p>
        <Link to="/account/save" onClick={saveAccount}>Save</Link>
        </div>
    </div>
    );
  };

