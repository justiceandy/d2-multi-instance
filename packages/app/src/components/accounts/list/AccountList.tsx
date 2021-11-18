import './AccountList.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiAccountPlus, mdiExpandAllOutline} from '@mdi/js';
import AccountItem from '../item/AccountItem';

const accounts = [
  { name: 'Example1', id: 1 },
  { name: 'Example2', id: 2 },
  { name: 'Example3', id: 3 },
  { name: 'Example4', id: 4 },
  { name: 'Example5', id: 5 },
  { name: 'Example6', id: 6 },
  { name: 'Example7', id: 7 },
  { name: 'Example8', id: 8 },
];

export default function AccountList () {
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
              ({ name, id }) => 
              <li key={id}><AccountItem name={name} id={id} /></li>)}
        </ul>
      </div>
    );
  };