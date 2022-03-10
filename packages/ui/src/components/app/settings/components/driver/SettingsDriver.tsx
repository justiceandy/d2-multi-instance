import { FormValues, FormLabels, FormContainer } from '../../../../atoms';

export default function SettingsDriver (settings:any) {
    return (
      <FormContainer>
        <FormLabels 
            items={[
              'Driver Enabled:',
            ]}
        />
        <FormValues
            rows={[
              { type: 'text', placeholder: '', },
            ]}
        />
    </FormContainer>
    );
  };

