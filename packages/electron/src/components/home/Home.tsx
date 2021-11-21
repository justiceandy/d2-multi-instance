import './Home.css';
import AccountList from 'components/accounts/list/AccountList';
import PageHeader from 'components/ui/page/header/PageHeader';

export default function Home (settings:any) {
  const { 
    accountNumber = 0, 
    api = null, 
    changeWindowTitles = null, 
    notifications = null,
    automatedLogin = null,
    kernelDriver = null,
} = settings;


  const enabledLabel = () => {
    return (
      <span className="enabled">Enabled</span>
    )
  }
  const disabledLabel = () => {
    return (
      <span className="disabled">Disabled</span>
    )
  }
  const statusLabel = (settingValue:string) => {
    console.log('settingValue', settingValue)
    return settingValue ?
      enabledLabel()
      :
      disabledLabel()
  }

  console.log(settings)
    return (
      <div className="Page">
         <PageHeader 
            breadcrumbs={[
              'Overview',
            ]}
          />
        <div className="PageTopMenu">
          <div>
            <ul>
              <li>Registered Accounts:  <span>{accountNumber}</span></li>
              <li>Running Processes:  <span>0</span></li>
            </ul>

            <div className="StatCard">
              <div>
                <span>20%</span>
                <label>CPU Usage</label>
              </div>
              <div>
                <span>200mb</span>
                <label>Memory Usage</label>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li>Notifications:  {statusLabel(notifications)}</li>
              <li>API Endpoints:  {statusLabel(api)}</li>
              <li>Automated Login:  {statusLabel(automatedLogin)}</li>
              <li>Manage Window Titles: {statusLabel(changeWindowTitles)}</li>
              <li>Kernel Driver:  {statusLabel(kernelDriver)}</li>
            </ul>
          </div>
        </div>
        <div className="PageContent">
          <AccountList {...settings} />
        </div>
      </div>
    );
  };