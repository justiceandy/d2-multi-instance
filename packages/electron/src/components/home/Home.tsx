import './Home.css';
import AccountList from 'components/accounts/list/AccountList';

export default function Home (settings:any) {
  const { 
    accountNumber = 0, 
    api = null, 
    changeWindowTitles = null, 
    notifications = null,
    automatedLogin = null,
    kernelDriver = null,
} = settings;

  console.log(settings)
    return (
      <div className="Page">
        <div className="PageTopMenu">
          <h1> Overview </h1>
          <div>
            <ul>
              <li>Running Processes:  <span>0</span></li>
              <li>Registered Accounts:  <span>{accountNumber}</span></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Notifications:  <span>{notifications ? 'Enabled' : 'Disabled'}</span></li>
              <li>API Endpoints:  <span>{api ? 'Enabled' : 'Disabled'}</span></li>
              <li>Automated Login:  <span>{automatedLogin ? 'Enabled' : 'Disabled'}</span></li>
              <li>Manage Window Titles:  <span>{changeWindowTitles ? 'Enabled' : 'Disabled'}</span></li>
              <li>Kernel Driver:  <span>{kernelDriver ? 'Enabled' : 'Disabled'}</span></li>
            </ul>
          </div>
        </div>
        <div className="PageContent">
          <AccountList {...settings} />
        </div>
      </div>
    );
  };