import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline } from '@mdi/js';

import './AccountClient.css';


const onValueChange = async (e:any) => {
  console.log('Value', e)
  return true;
}

export default function AccountClientEdit () {
    return (
      <div className="AccountClient">
        <div className="FormLabels">
        <ul>
            <li>D2R Launcher:</li>
            <li>Battle Net Launcher:</li>
            <li>Skip Intro:</li>
        </ul>
        </div>
        <div className="FormValues">
        <ul>
            <li><input name="d2rLauncher" placeholder="-w" type="text" onChange={onValueChange} /></li>
            <li><input name="bnetLauncher" placeholder="-mod lootfilter" type="text" onChange={onValueChange} /></li>
            <li className="centered"><Icon className="CheckboxItem" path={mdiCheckboxBlankOutline}
              title="Add Acccount"
              size={1} /></li>
        </ul>
        </div>
    </div>
    );
  };

