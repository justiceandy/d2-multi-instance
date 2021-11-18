import { Link } from 'react-router-dom';
import './AccountWindow.css';

const saveAccount = async (e:any) => {
  e.preventDefault();
  console.log('Saving')
  return true;
}

export default function AccountWindowCreate () {
    return (
      <div className="AccountClient">
        <div className="FormLabels">
          <ul>
              <li>Cordinates:</li>
              <li>Powertrays:</li>
          </ul>
        </div>
        <div className="FormAction">
        <p>Window Location when Launched</p>
        <Link to="/account/save" onClick={saveAccount}>Save</Link>
        </div>
    </div>
    );
  };

