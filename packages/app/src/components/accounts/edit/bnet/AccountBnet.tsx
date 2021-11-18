import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline } from '@mdi/js';

import './AccountBnet.css';

const saveAccount = async (e:any) => {
  e.preventDefault();
  console.log('Saving')
  return true;
}
const onValueChange = async (e:any) => {
  console.log('Value', e)
  return true;
}
export default function AccountBnetEdit () {
    return (
      <div className="AccountClient">
        <div className="FormLabels">
            <ul>
              <li>Email:</li>
              <li>Password:</li>
              <li>Automated Login:</li>
            </ul>
        </div>
        <div className="FormValues">
          <ul>
          <li><input name="display" type="text" onChange={onValueChange} /></li>
          <li><input name="bnetUser" type="text" onChange={onValueChange} /></li>
          <li className="centered"><Icon className="CheckboxItem" path={mdiCheckboxBlankOutline}
              title="Add Acccount"
              size={1} /></li>
          </ul>
        </div>
        <div className="FormAction">
          <Link to="/account/save" onClick={saveAccount}>Save</Link>
        </div>
        <p className="PageToolTip">See Credential Store</p>
    </div>
    );
  };

