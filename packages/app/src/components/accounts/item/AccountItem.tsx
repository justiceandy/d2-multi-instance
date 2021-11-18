import './AccountItem.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiRefresh, mdiPlay  } from '@mdi/js';
import { mdiNumeric1CircleOutline } from '@mdi/js';

const launchGame = (e:any) => {
  console.log(e);
  e.preventDefault();
}

const refreshAccount = (e:any) => {
  console.log(e);
  e.preventDefault();
}

export default function AccountItem ({ name, id }:any) {
    return (
        <div className="AccountItem">
            <Icon className="OrderIcon" path={mdiNumeric1CircleOutline}
                title="Launch"
                size={1} />
            <Link to={{
                pathname: `/accounts/edit/general/${id}`, 
            }}>
            <label>{name}</label>
            </Link>
            <div className="actIcons">
            <Link to="game" onClick={launchGame}>
                <Icon className="LaunchIcon" path={mdiPlay}
                title="Launch"
                size={1} />
            </Link>
            <Link to="game" onClick={refreshAccount}>
                <Icon className="RefreshIcon" path={mdiRefresh}
                title="Refresh Token"
                size={1} />
            </Link>
            </div>
        </div>
    );
  };