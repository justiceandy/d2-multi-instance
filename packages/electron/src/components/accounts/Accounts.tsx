import './Accounts.css';
import AccountList from './list/AccountList';

export default function Accounts (settings:any) {
  console.log(settings)
    return (
      <div className="Page">
        <AccountList {...settings} />
      </div>
    );
  };