
import { FormValues, FormLabels, FormContainer } from '../../../../../atoms';

import { modifiers, letters, defaultHotkeys } from './libs/defaults';

import './AccountHotkey.css';

export default function AccountHotKeyEdit ({ account, onAttributeChanged }:any) {
  const { hotkey = defaultHotkeys } = account;
    return (
      <FormContainer>
        <FormLabels 
            items={[
              'Enabled:',
              'Modifier:',
              'Key:',
            ]}
        />
         <FormValues
            rows={[
              { type: 'checkbox', name: 'enabled', value: hotkey.enabled, onChange: onAttributeChanged },
              { type: 'select', value: hotkey.modifier, name: 'modifier', options: modifiers, onChange: onAttributeChanged },
              { type: 'select', value: hotkey.key, name: 'key', options: letters, onChange: onAttributeChanged },
            ]}
         />
    </FormContainer>
    );
  };

