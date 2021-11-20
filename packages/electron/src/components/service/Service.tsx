import './Service.css';
import Tabs from 'components/ui/tabs/Tabs';
import PageHeader from 'components/ui/page/header/PageHeader';

export default function Service (state:any) {
  console.log(state)
    return (
        <div className="Page">
          <PageHeader name={'Service'} />
          <Tabs tabs={[
              { url: '/service/general', label: 'General' },
              { url: '/service/process', label: 'Monitored Processes' },
              { url: '/service/registry', label: 'Tracked Registry Keys' },
              { url: '/service/api', label: 'API' },
              { url: '/service/events', label: 'Events' }
           ]} />
        </div>
    );
  };