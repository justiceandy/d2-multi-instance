import Select from 'react-select';
import { useState } from 'react';
import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline } from '@mdi/js';

import './AccountHotkey.css';

const options = [
  { value: 'shift', label: 'Shift' },
  { value: 'alt', label: 'Alt' },
  { value: 'ctrl', label: 'Ctrl' },
];

const letters = [
  'A','B','C','D','E','F','G','H',
  'I','J','K','L','M','N','O','P',
  'Q','R','S','T','U','V','W','X',
  'Y','Z'
]
export default function AccountHotKeyEdit () {
  const [selectedOption,  setSelectedOption] = useState(null);
    return (
      <div className="AccountHotkey">
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
              title="Enable Hot Key"
              size={1} /></li>
               <li>
                   <Select
                      className="SelectBox"
                      defaultValue={selectedOption}
                      /* @ts-expect-error */
                      onChange={setSelectedOption}
                      options={options}
                  />
                </li>
                <li>
                   <Select
                      className="SelectBox"
                      defaultValue={selectedOption}
                      /* @ts-expect-error */
                      onChange={setSelectedOption}
                      options={letters.map(
                        i => ({ value: i, label: i })
                        )}
                  />
                </li>
        </ul>
        </div>
        {/* <div className="FormAction">
          <Link to="/account/save" onClick={saveAccount}>Save</Link>
        </div> */}
    </div>
    );
  };

