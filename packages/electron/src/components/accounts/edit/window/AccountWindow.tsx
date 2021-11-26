
import './AccountWindow.css';
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';


export default function AccountWindowEdit () {
    return (
      <div className="ContentContainer AccountWindowEdit">
        <FormLabels 
            items={[
              'Powertrays:',
            ]}
        />
         <FormValues
            rows={[
              /* @ts-expect-error */
              { type: 'checkbox', defaultValue: '', checked: true },
            ]}
         />
    </div>
    );
  };

