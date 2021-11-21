import './SettingsAPI.css';
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';

export default function SettingsApiEdit (settings:any) {
  console.log(settings)
    return (
      <div className="ContentContainer">
          <FormLabels 
              items={[
                'Windows Notifications:',
                'Automated Battle.net Login:',
                'Change Window Titles:'
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
              ]}
          />
        </div>
    );
  };

