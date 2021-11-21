import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline } from '@mdi/js';

import './AccountBnet.css';

const onValueChange = async (e:any) => {
  console.log('Value', e)
  return true;
}
export default function AccountBnetEdit () {
    return (
      <div className="AccountClient">
        <div className="FormLabels">
            <ul>
              <li>Battle.net Email:</li>
              <li>Battle.net Password:</li>
              <li>Enabled:</li>
            </ul>
        </div>
        <div className="FormValues">
          <ul>
          <li><input name="display" type="text" placeholder={"automated@blizzard.com"} onChange={onValueChange} /></li>
          <li><input name="bnetUser"  placeholder={"Encrypted"} type="password" onChange={onValueChange} /></li>
          <li className="centered">
              <Icon className="CheckboxItem" 
                    path={mdiCheckboxBlankOutline}
                    title="Add Acccount"
                    size={1} />
          </li>
          </ul>
        </div>
    </div>
    );
  };

