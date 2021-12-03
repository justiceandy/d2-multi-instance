
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';
import { defaultBattleNet, regions, locals } from './libs/defaults';

import './AccountBnet.css';

export default function AccountBnetEdit ({  account, onAttributeChanged }:any) {
  console.log(account);
   const { battlenet = defaultBattleNet } = account
    return (
      <div className="ContentContainer AccountBnetEdit">
        <FormLabels 
            items={[
              'Email:',
              'Password:',
              'Region:',
              'Local:',
              'Automated:',
            ]}
        />
         <FormValues
            rows={[
              /* @ts-expect-error */
              { type: 'text', name: "credentials.username", placeholder: "automated@blizzard.com", value: battlenet.credentials.email, onChange: onAttributeChanged },
              /* @ts-expect-error */
              { type: 'password', name: "credentials.password", placeholder: "Encrypted", value: battlenet.credentials.password, onChange: onAttributeChanged },
              /* @ts-expect-error */
              { type: 'select', name: "region", value: battlenet.region, options: regions, onChange: onAttributeChanged },
              /* @ts-expect-error */
              { type: 'select', name: "local", value: battlenet.local, options: locals, onChange: onAttributeChanged },
              /* @ts-expect-error */
              { type: 'checkbox', name: "automated", value: battlenet.automated, onChange: onAttributeChanged },
          ]}
         />
    </div>
    );
  };

