import './SettingsGeneral.css';
import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline } from '@mdi/js';

export default function SettingsGeneralEdit (settings:any) {
  console.log(settings)
    return (
      <div className="ContentContainer">
            <div className="FormLabels">
              <ul>
                  <li>Windows Notifications:</li>
                  <li>Automated Battle.net Login:</li>
                  <li>Change Window Titles:</li>
              </ul>
            </div>
            <div className="FormValues">
                <ul>
                  <li className="centered"><Icon className="CheckboxItem" path={mdiCheckboxBlankOutline}
                    title="Enable Windows Notifications"
                    size={1} /></li>
                  <li className="centered"><Icon className="CheckboxItem" path={mdiCheckboxBlankOutline}
                    title="Enable Automated Login"
                    size={1} /></li>
                  <li className="centered"><Icon className="CheckboxItem" path={mdiCheckboxBlankOutline}
                    title="Enable Window Title Change"
                    size={1} /></li>
                </ul>
            </div>
      </div>
    );
  };

