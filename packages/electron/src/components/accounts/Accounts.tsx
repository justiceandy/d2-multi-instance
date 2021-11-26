import './Accounts.css';
import AccountList from './list/AccountList';

export default function Accounts (settings:any) {
    return (
      <div className="Page">
        <AccountList {...settings} />
      </div>
    );
  };