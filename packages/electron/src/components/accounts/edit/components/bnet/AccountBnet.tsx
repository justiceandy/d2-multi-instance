
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';

import './AccountBnet.css';

const modOptions = [
  { value: 'shift', label: 'Shift' },
  { value: 'alt', label: 'Alt' },
  { value: 'ctrl', label: 'Ctrl' },
];

const onValueChange = async (e:any) => {
  console.log('Value', e)
  return true;
}
export default function AccountBnetEdit () {
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
              { type:  'text', placeholder: "automated@blizzard.com", onChange: onValueChange, checked: true },
              /* @ts-expect-error */
              { type: 'password', placeholder: "Encrypted", onChange: onValueChange, checked: true },
              /* @ts-expect-error */
              { type: 'select', defaultValue: '', options: modOptions },
              /* @ts-expect-error */
              { type: 'select', defaultValue: '', options: modOptions },
              /* @ts-expect-error */
              { type: 'checkbox', defaultValue: '', onChange: onValueChange, checked: true },
          ]}
         />
    </div>
    );
  };

