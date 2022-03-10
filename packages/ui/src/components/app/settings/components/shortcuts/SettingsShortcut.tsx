import { FormValues, FormLabels, FormContainer } from '../../../../atoms';

export default function SettingsShortcut (settings:any) {
  const accountRows = (accounts:any) => {
    return accounts.map((i:any) => ({ type: 'checkbox', name: i.name, title: i.display }))
  }

  const generate = (e:any) => {
    e.preventDefault()
  }

    return (
      <FormContainer>
          <FormLabels 
              items={[
                'Shortcut Directory:',
                { label: 'Select Accounts:', className: 'ShortcutAccountSelect' },
                ''
              ]}
          />
          <FormValues
              rows={[
                { type: 'text', placeholder: settings.shortcutDirectory, },
                { type: 'grid', rows: accountRows(settings.accounts || []) },
                { type: 'action', label: 'Generate', onClick: generate }
              ]}
          />
      </FormContainer>
    );
  };

