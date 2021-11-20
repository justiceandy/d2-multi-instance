import './AccountList.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiAccountPlus, mdiExpandAllOutline} from '@mdi/js';
import AccountItem from '../item/AccountItem';



export default function AccountList ({ accounts = [] }:any) {
  console.log(accounts)
    return (
      <div className="AccountList">
        <h1>Account List 
        <Link to="/accounts/create">
         <Icon className="MenuAddIcon" path={mdiExpandAllOutline}
              title="Launch All"
              size={1} />
          </Link>
         <Link to="/accounts/create">
          <Icon className="MenuAddIcon" path={mdiAccountPlus}
              title="Add Acccount"
              size={1} />
          </Link>
        </h1>
        <ul>
            {accounts.map(
              ({ display }:any, i:any) => 
              <li key={i}><AccountItem name={display} id={i} /></li>)}
        </ul>
        <p className="PageToolTip">Only 1 account can launch at a time</p>
      </div>
    );
  };