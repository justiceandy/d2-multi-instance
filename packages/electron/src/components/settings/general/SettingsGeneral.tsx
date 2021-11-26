import './SettingsGeneral.css';
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';

export default function SettingsGeneralEdit (settings:any) {
  console.log(settings)
    return (
      <div className="ContentContainer SettingsGeneral">
            <FormLabels 
                items={[
                  'Notifications:',
                  'Automated Login:',
                  'Change Window Titles:',
                  'Debug Mode',
                ]}
            />
            <FormValues
                rows={[
                  /* @ts-expect-error */
                  { type: 'checkbox', checked: true, },
                   /* @ts-expect-error */
                  { type: 'checkbox', checked: true },
                   /* @ts-expect-error */
                  { type: 'checkbox', checked: true },
                  /* @ts-expect-error */
                  { type: 'checkbox',  checked: true },
                ]}
            />
      </div>
    );
  };

