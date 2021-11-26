import './AccountGeneral.css';
import FormValues from 'components/ui/form/values/FormValues';
import FormLabels from 'components/ui/form/labels/FormLabels';



const onValueChange = async (e:any) => {
  console.log('Value', e)
  return e.target.value;
}

export default function AccountGeneralEdit (account:any) {
  const { display = "", folder = "", region = 'NA' } = account;
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
              { type: 'text', defaultValue: display, onChange: onValueChange, checked: true },
                /* @ts-expect-error */
                { type: 'text', defaultValue: folder, onChange: onValueChange, checked: true },
                /* @ts-expect-error */
                { type: 'checkbox', defaultValue: region, onChange: onValueChange, checked: true },
            ]}
        />

        {/* <div className="FormValues">
            {folder === "" ?
                <input 
                      directory={folder} 
                      webkitdirectory={folder}  
                      type="file"
                      onChange={onUploadHandler}/>
                : <input name="region" type="text" defaultValue={folder} onChange={onValueChange} />
            }
        </div> */}
    </div>
    );
  };

