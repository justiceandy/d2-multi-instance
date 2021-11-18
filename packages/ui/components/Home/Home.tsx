import './Home.css';
import AccountList from 'components/accounts/list/AccountList';

export default function Home () {
    return (
      <div className="Page">
        <div className="PageTopMenu">
          <h1> Overview </h1>
          <ul>
            <li>Background Service:  <span>Enabled</span></li>
            <li>API Endpoints:  <span>Enabled</span></li>
            <li>Key Rotation:  <span>Enabled</span></li>
          </ul>
        </div>
        <div className="PageContent">
          <AccountList />
        </div>
      </div>
    );
  };