
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';
import './AccountHotkey.css';

const modOptions = [
  { value: 'shift', label: 'Shift' },
  { value: 'alt', label: 'Alt' },
  { value: 'ctrl', label: 'Ctrl' },
];

const letterOptions = [
  'A','B','C','D','E','F','G','H',
  'I','J','K','L','M','N','O','P',
  'Q','R','S','T','U','V','W','X',
  'Y','Z'
].map(
  i => ({ value: i, label: i })
);

export default function AccountHotKeyEdit () {
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
              { type: 'checkbox', defaultValue: '', checked: true },
              /* @ts-expect-error */
              { type: 'select', defaultValue: '', options: modOptions, checked: true },
              /* @ts-expect-error */
              { type: 'select', defaultValue: '', options: letterOptions, checked: true },
            ]}
         />
    </div>
    );
  };

