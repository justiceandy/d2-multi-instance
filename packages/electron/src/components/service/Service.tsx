import {  mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { Switch, Route } from 'react-router-dom';
import Tabs from 'components/ui/tabs/Tabs';
import PageHeader from 'components/ui/page/header/PageHeader';
import PageFooterToolTip from 'components/ui/page/footer/tooltip/FooterTooltip';
import ServiceOverview from './overview/ServiceOverview';
import ServiceAPI from './api/ServiceAPI';
import ServiceProcesses from './processes/ServiceProcesses';
import ServiceEvents from './events/ServiceEvents';
import ServiceStorage from './storage/ServiceStorage';

import './Service.css';

export default function Service (state:any) {
  console.log(state)
    return (
        <div className="Page">
          <PageHeader breadcrumbs={['Service']} />
          <Tabs tabs={[
              { url: '/service/general', label: 'General' },
              { url: '/service/process', label: 'Processes' },
              { url: '/service/registry', label: 'Storage' },
              { url: '/service/api', label: 'API' },
              { url: '/service/events', label: 'Events' }
           ]} />
          <Switch>
            <Route path="/service/general"
                  render={() => <ServiceOverview />} />
            <Route path="/service/api"
                  render={() => <ServiceAPI  />} /> 
            <Route path="/service/process"
                  render={() => <ServiceProcesses  />} />
            <Route path="/service/registry" 
                  render={() => <ServiceStorage  />} />
            <Route path="/service/events" 
                  render={() => <ServiceEvents  />} />
          </Switch>
          <PageFooterToolTip 
              text={"Save events occur on changes"}
              icons={[
                { icon: mdiArrowLeft, title: 'Back to Accounts'  },
                { icon: mdiArrowRight, title: 'Next Account' },
              ]}
          />
        </div>
    );
  };