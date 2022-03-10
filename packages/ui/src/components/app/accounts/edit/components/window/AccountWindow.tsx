
import { FormValues, FormLabels, FormContainer } from '../../../../../atoms';
import { defaultWindow } from './libs/defaults';

import './AccountWindow.css';

export default function AccountWindowEdit ({ account, onAttributeChanged }:any) {
  const { window = defaultWindow } = account;
    return (
      <FormContainer>
        <FormLabels 
            items={[
              'Powertrays:',
            ]}
        />
         <FormValues
            rows={[
              { type: 'checkbox', name: 'powertrays.enabled', value: window.powertrays.enabled, onChange: onAttributeChanged },
            ]}
         />
    </FormContainer>
    );
  };

