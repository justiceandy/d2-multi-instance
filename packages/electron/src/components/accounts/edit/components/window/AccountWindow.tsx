
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';
import { defaultWindow } from './libs/defaults';

import './AccountWindow.css';

export default function AccountWindowEdit ({ account, onAttributeChanged }:any) {
  const { window = defaultWindow } = account;
    return (
      <div className="ContentContainer AccountWindowEdit">
        <FormLabels 
            items={[
              'Powertrays:',
            ]}
        />
         <FormValues
            rows={[
              /* @ts-expect-error */
              { type: 'checkbox', name: 'powertrays.enabled', value: window.powertrays.enabled, onChange: onAttributeChanged },
            ]}
         />
    </div>
    );
  };

