import { FormValues, FormLabels, FormContainer } from '../../../../../atoms';

export default function AccountGeneralEdit ({ onAttributeChanged, account }:any) {
  const { display, folder, main = false } = account.general;
    return (
      <FormContainer style={'height: auto'}>
        <FormLabels 
            items={[
              'Display Name:',
              'Game Folder:',
            ]}
        />
        <FormValues
            rows={[
               { type: 'text', name: "display", value: display, onChange: onAttributeChanged },
               { type: 'text', name: "folder", value: folder, onChange: onAttributeChanged },
               { 
                type: 'grid', 
                name: "main", 
                rows: [
                  { type: 'checkbox', name: 'Example1', title: 'Main Account' },
                  { type: 'checkbox', name: 'Example1', title: 'Active' },
                ],
              },
            ]}
        />
      </FormContainer>
    );
  };

