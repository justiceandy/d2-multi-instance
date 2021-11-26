import './ServiceStorage.css';
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';

export default function ServiceStorage () {
    return (
      <div className="ContentContainer SettingsStorage ServiceBG ui-form-page">
       <FormLabels 
            items={[
                'Settings File:',
                'Error Log:',
            ]}
        />
        <FormValues
            rows={[
                /* @ts-expect-error */
                { type: 'text', defaultValue: "3000" },
                /* @ts-expect-error */
                { type: 'text', defaultValue: "3000" },
            ]}
        />
      </div>
    );
  };