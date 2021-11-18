import { Link } from 'react-router-dom';
import './AccountGeneral.css';


const saveAccount = async (e:any) => {
  e.preventDefault();
  console.log('Saving')
  return true;
}

const onUploadHandler = async (e:any) => {
  console.log('Saving', e)
  return true;
}

const onValueChange = async (e:any) => {
  console.log('Value', e)
  return true;
}

export default function AccountGeneralCreate (account:any) {
  const { displayName, userName, gameFolder = "", region } = account;
    return (
      <div className="AccountClient">
        <div className="FormLabels">
        <ul>
            <li>Display Name:</li>
            <li>Battle Net User:</li>
            <li>Game Folder:</li>
            <li>Region:</li>
        </ul>
        </div>
        <div className="FormValues">
        <ul>
            <li><input name="display" type="text" value={displayName} onChange={onValueChange} /></li>
            <li><input name="bnetUser" type="text" value={userName} onChange={onValueChange} /></li>
            <li><input 
            /* @ts-expect-error */
                    directory={gameFolder} 
                    webkitdirectory={gameFolder}  
                    type="file"
                    onChange={onUploadHandler}
            /></li>
            <li><input name="region" type="text" value={region} onChange={onValueChange} /></li>
        </ul>
        </div>
        <div className="FormAction">
        <Link to="/account/save" onClick={saveAccount}>Save</Link>
        </div>
    </div>
    );
  };

