
import './AccountWindow.css';
import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline } from '@mdi/js';

export default function AccountWindowEdit () {
    return (
      <div className="AccountClient">
        <div className="FormLabels">
          <ul>
              <li>Powertrays:</li>
          </ul>
        </div>
        <div className="FormValues">
          <ul>
          <li className="centered"><Icon className="CheckboxItem" path={mdiCheckboxBlankOutline}
              title="Power Tray Zone"
              size={1} /></li>
          </ul>
        </div>
        {/* <div className="FormAction">
          <Link to="/account/save" onClick={saveAccount}>Save</Link>
        </div> */}
    </div>
    );
  };

