import './ServiceAPI.css';
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';

export default function SettingsApiEdit (settings:any) {
    
    console.log(settings)
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
      <div className="ContentContainer SettingsApi ServiceBG ui-form-page">
        <FormLabels 
            items={[
                { label: 'API Service', className: 'ApiEndpointSelect' },
                'Enabled:',
                'Local Port:',
                { label: 'Specific Endpoints', className: 'ApiEndpointSelect' },
                ...endpointLabels()
            ]}
        />
        <FormValues
            rows={[
                /* @ts-expect-error */
                { type: 'empty', checked: true },
                /* @ts-expect-error */
                { type: 'checkbox', checked: true },
                /* @ts-expect-error */
                { type: 'text', defaultValue: "3000" },
                /* @ts-expect-error */
                { type: 'empty', checked: true },
                /* @ts-expect-error */
                ...endpointCheckbox()
            ]}
        />
      </div>
    );
  };

