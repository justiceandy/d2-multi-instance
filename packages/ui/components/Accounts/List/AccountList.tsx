import './AccountList.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiAccountPlus, mdiAccountEdit,  mdiRefresh, mdiLaunch  } from '@mdi/js';

const launchGame = (e:any) => {
  console.log(e);
  e.preventDefault();
}

const refreshAccount = (e:any) => {
  console.log(e);
  e.preventDefault();
}

export default function AccountList ({ accounts = [] }) {
    return (
      <div className="AccountList">
        <h1>Account List 
         <Link to="/">
          <Icon className="MenuAddIcon" path={mdiAccountPlus}
              title="Add Acccount"
              size={1} />
          </Link>
        </h1>
        <ul>
          <li>
            {accounts.map(i => {
              <label>${i}</label>
            })}
            <div>
              <label>Example 1</label>
              <div className="actIcons">
                <Link to="game" onClick={launchGame}>
                  <Icon className="LaunchIcon" path={mdiLaunch}
                  title="Launch"
                  size={1} />
                </Link>
                <Link to="game" onClick={refreshAccount}>
                  <Icon className="RefreshIcon" path={mdiRefresh}
                  title="Refresh Token"
                  size={1} />
                </Link>
                <Icon className="EditIcon" path={mdiAccountEdit}
                title="Edit"
                size={1} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  };