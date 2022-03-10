import { FormValues, FormLabels, FormContainer } from '../../../../atoms';

export default function SettingsApi (settings:any) {
    const endpoints = () => {
        return [
          { type: 'checkbox', name: 'account', title: '/account/' }, 
          { type: 'checkbox', name: 'process', title: '/process/' }, 
          { type: 'checkbox', name: 'settings', title: '/settings/' }, 
         ]
    }

    const endpointLabels = () => {
        return endpoints().map(( { name }:any) => name)
    }

    const endpointCheckbox = () => {
        return endpoints().map(( { name }:any) => {
            return { type: 'checkbox', label: name }
        })
    }

    return (
      <FormContainer>
        <FormLabels 
            items={[
                'Enabled:',
                'Local Port:',
                ...endpointLabels()
            ]}
        />
        <FormValues
            rows={[
                { type: 'checkbox', checked: true },
                { type: 'text', defaultValue: "3000" },
                ...endpointCheckbox()
            ]}
        />
      </FormContainer>
    );
  };

