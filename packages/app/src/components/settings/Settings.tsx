import './Settings.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline } from '@mdi/js';

const onValueChange = async (e:any) => {
  console.log('Value', e)
  return true;
}
const saveAccount = async (e:any) => {
  e.preventDefault();
  console.log('Saving')
  return true;
}
export default function Settings () {
    return (
        <div className="Page">
          <h1>Settings</h1>
          <div className="FormLabels">
            <ul>
                <li>Enable API:</li>
                <li>Windows Notifications:</li>
                <li>Automated Battle.net Login:</li>
                <li>Change Window Titles:</li>
                <li>Shortcut Directory:</li>
            </ul>
          </div>
          <div className="FormValues">
              <ul>
                <li><Icon className="MenuAddIcon" path={mdiCheckboxBlankOutline}
                  title="Add Acccount"
                  size={1} /></li>
                <li><Icon className="MenuAddIcon" path={mdiCheckboxBlankOutline}
                  title="Add Acccount"
                  size={1} /></li>
                <li><Icon className="MenuAddIcon" path={mdiCheckboxBlankOutline}
                  title="Add Acccount"
                  size={1} /></li>
                <li><Icon className="MenuAddIcon" path={mdiCheckboxBlankOutline}
                  title="Add Acccount"
                  size={1} /></li>
                <li><input name="bnetUser" type="text" onChange={onValueChange} /></li>
              </ul>
          </div>
          <div className="FormAction">
            <Link to="/account/save" onClick={saveAccount}>Save</Link>
          </div>
          <p className="PageToolTip">The Override Account level settings</p>
        </div>
    );
  };