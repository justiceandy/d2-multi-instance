import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';
import './SettingsShortcut.css';


export default function SettingsShortcutEdit (settings:any) {
  console.log(settings)

  const accountRows = (accounts:any) => {
    return accounts.map((i:any) => ({ type: 'checkbox', name: i.name, title: i.display }))
  }

  const generate = (e:any) => {
    e.preventDefault()
  }

    return (
      <div className="ContentContainer SettingsShortcut">
          <FormLabels 
              items={[
                'Shortcut Directory:',
                { label: 'Select Accounts:', className: 'ShortcutAccountSelect' },
                ''
              ]}
          />
          <FormValues
              rows={[
                /* @ts-expect-error */
                { type: 'text', placeholder: settings.shortcutDirectory, },
                /* @ts-expect-error */
                { type: 'grid', rows: accountRows(settings.accounts) },
                /* @ts-expect-error */
                { type: 'action', label: 'Generate', onClick: generate }
              ]}
          />
      </div>
    );
  };

