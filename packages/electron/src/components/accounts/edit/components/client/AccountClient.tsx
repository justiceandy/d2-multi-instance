
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';
import defaultClient from './libs/defaults';

import './AccountClient.css';

export default function AccountClientEdit ({ account, onAttributeChanged }:any) {
    const { client = defaultClient } = account;
    return (
      <div className="ContentContainer AccountClientEdit">
         <FormLabels 
            items={[
              'D2R Launcher:',
              'Skip Intro:',
              'Pre-Launch:',
              'Post-Launch:',
            ]}
        />
         <FormValues
            rows={[
              /* @ts-expect-error */
              { type: 'text', name: "dr", value: client.d2r, placeholder: "-w- mod lootfilter", onChange: onAttributeChanged },
              /* @ts-expect-error */
              { type: 'checkbox', name: "skipIntro", value: client.skipIntro, onChange: onAttributeChanged },
               /* @ts-expect-error */
               { type:  'text', name: "launch.pre", value: client.launch.pre, placeholder: "/path/to/script.exe", onChange: onAttributeChanged },
                /* @ts-expect-error */
              { type:  'text', name: "launch.post", value: client.launch.post, placeholder: "/path/to/script.exe", onChange: onAttributeChanged },
            ]}
         />
    </div>
    );
  };

