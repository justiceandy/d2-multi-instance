import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';

import './AccountGeneral.css';

export default function AccountGeneralEdit ({ onAttributeChanged, account }:any) {
  const { display, folder, main = false } = account.general;
    return (
      <div className="ContentContainer AccountGeneralEdit">
        <FormLabels 
            items={[
              'Display Name:',
              'Game Folder:',
              'Main Account:'
            ]}
        />
        <FormValues
            rows={[
               /* @ts-expect-error */
               { type: 'text', name: "display", value: display, onChange: onAttributeChanged },
                /* @ts-expect-error */
                { type: 'text', name: "folder", value: folder, onChange: onAttributeChanged },
                /* @ts-expect-error */
                { type: 'checkbox', name: "main", value: main, onChange: onAttributeChanged },
            ]}
        />
    </div>
    );
  };

