
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';

import './AccountClient.css';


const onValueChange = async (e:any) => {
  console.log('Value', e)
  return true;
}

export default function AccountClientEdit () {
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
              { type: 'text', placeholder: "-w- mod lootfilter", onChange: onValueChange, checked: true },
              /* @ts-expect-error */
              { type: 'checkbox', defaultValue: '', onChange: onValueChange, checked: true },
               /* @ts-expect-error */
               { type:  'text', placeholder: "/path/to/script.exe", onChange: onValueChange, checked: true },
                /* @ts-expect-error */
              { type:  'text', placeholder: "/path/to/script.exe", onChange: onValueChange, checked: true },
            ]}
         />
    </div>
    );
  };

