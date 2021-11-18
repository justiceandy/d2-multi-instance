import './Home.css';
import AccountList from 'components/accounts/list/AccountList';

export default function Home () {
    return (
      <div className="Page">
        <div className="PageTopMenu">
          <h1> Overview </h1>
        
          <div>
            <ul>
              <li>Running Processes:  <span>0</span></li>
              <li>Registered Accounts:  <span>8</span></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Background Service:  <span>Enabled</span></li>
              <li>API Endpoints:  <span>Enabled</span></li>
              <li>Automated Login:  <span>Enabled</span></li>
              <li>Manage Window Titles:  <span>Enabled</span></li>
              <li>Kernel Driver:  <span>Enabled</span></li>
            </ul>
          </div>
        </div>
        <div className="PageContent">
          <AccountList />
        </div>
      </div>
    );
  };