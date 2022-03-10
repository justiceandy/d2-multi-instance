import { FormValues, FormLabels, FormContainer } from '../../../../atoms';

export default function ServiceStorage () {
    return (
      <FormContainer>
       <FormLabels 
            items={[
                'Settings File:',
                'Error Log:',
            ]}
        />
        <FormValues
            rows={[
                { type: 'text', defaultValue: "3000" },
                { type: 'text', defaultValue: "3000" },
            ]}
        />
      </FormContainer>
    );
  };
