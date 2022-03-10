import { FormValues, FormLabels, FormContainer } from '../../../../atoms';

export default function SettingsGeneral (settings:any) {
    return (
      <FormContainer>
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
                { type: 'checkbox', checked: true, },
                { type: 'checkbox', checked: true },
                { type: 'checkbox', checked: true },
                { type: 'checkbox',  checked: true },
              ]}
          />
      </FormContainer>
    );
  };

