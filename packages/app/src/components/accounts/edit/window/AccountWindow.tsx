import { Link } from 'react-router-dom';
import './AccountWindow.css';
import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline } from '@mdi/js';

const saveAccount = async (e:any) => {
  e.preventDefault();
  console.log('Saving')
  return true;
}

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
          <li><Icon className="MenuAddIcon" path={mdiCheckboxBlankOutline}
              title="Power Tray Zone"
              size={1} /></li>
          </ul>
        </div>
        <div className="FormAction">
          <Link to="/account/save" onClick={saveAccount}>Save</Link>
        </div>
        <p className="PageToolTip">Window Position powered by Powertrays. Launched to a grid index</p>
    </div>
    );
  };

