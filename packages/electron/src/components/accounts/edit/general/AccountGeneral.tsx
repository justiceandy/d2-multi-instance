import './AccountGeneral.css';



const onUploadHandler = async (e:any) => {
  console.log('Saving', e)
  return true;
}

const onValueChange = async (e:any) => {
  console.log('Value', e)
  return e.target.value;
}

export default function AccountGeneralEdit (account:any) {
  const { display = "", folder = "", region = 'NA' } = account;
  console.log(account)
    return (
      <div className="AccountClient">
        <div className="FormLabels">
        <ul>
            <li>Display Name:</li>
            <li>Game Folder:</li>
            <li>Region:</li>
        </ul>
        </div>
        <div className="FormValues">
        <ul>
            <li><input name="display" type="text" defaultValue={display} onChange={onValueChange} /></li>
            <li>
                {folder === "" ?
                    <input 
                         /* @ts-expect-error */
                         directory={folder} 
                         webkitdirectory={folder}  
                         type="file"
                         onChange={onUploadHandler}/>
                    : <input name="region" type="text" defaultValue={folder} onChange={onValueChange} />
                }
            </li>
            <li><input name="region" type="text" defaultValue={region} onChange={onValueChange} /></li>
        </ul>
        </div>
        {/* <div className="FormAction">
        <Link to="/account/save" onClick={saveAccount}>Save</Link>
        </div> */}
    </div>
    );
  };

