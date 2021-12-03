
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';
import { modifiers, letters, defaultHotkeys } from './libs/defaults';

import './AccountHotkey.css';

export default function AccountHotKeyEdit ({ account, onAttributeChanged }:any) {
  const { hotkey = defaultHotkeys } = account;
    return (
      <div className="ContentContainer AccountHotkeyEdit">
        <FormLabels 
            items={[
              'Enabled:',
              'Modifier:',
              'Key:',
            ]}
        />
         <FormValues
            rows={[
              /* @ts-expect-error */
              { type: 'checkbox', name: 'enabled', value: hotkey.enabled, onChange: onAttributeChanged },
              /* @ts-expect-error */
              { type: 'select', value: hotkey.modifier, name: 'modifier', options: modifiers, onChange: onAttributeChanged },
              /* @ts-expect-error */
              { type: 'select', value: hotkey.key, name: 'key', options: letters, onChange: onAttributeChanged },
            ]}
         />
    </div>
    );
  };

