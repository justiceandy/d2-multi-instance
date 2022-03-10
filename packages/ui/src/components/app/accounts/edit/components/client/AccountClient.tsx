
import { FormValues, FormLabels, FormContainer } from '../../../../../atoms';
import defaultClient from './libs/defaults';

import './AccountClient.css';

export default function AccountClientEdit ({ account, onAttributeChanged }:any) {
    const { client = defaultClient } = account;
    return (
      <FormContainer>
         <FormLabels 
            items={[
              'D2R Launcher:',
              'Pre-Launch:',
              'Post-Launch:',
              'Skip Intro:',
              'Wait in Que:',
            ]}
        />
         <FormValues
            rows={[
              { type: 'text', name: "dr", value: client.d2r, placeholder: "-w- mod lootfilter", onChange: onAttributeChanged },
              { type:  'text', name: "launch.pre", value: client.launch.pre, placeholder: "/path/to/script.exe", onChange: onAttributeChanged },
              { type:  'text', name: "launch.post", value: client.launch.post, placeholder: "/path/to/script.exe", onChange: onAttributeChanged },
              { type: 'checkbox', name: "skipIntro", value: client.skipIntro, onChange: onAttributeChanged },
              { type: 'checkbox', name: "wait", value: client.skipIntro, onChange: onAttributeChanged },
            ]}
         />
    </FormContainer>
    );
  };

