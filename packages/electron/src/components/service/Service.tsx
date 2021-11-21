import {  mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { Switch, Route } from 'react-router-dom';
import Tabs from 'components/ui/tabs/Tabs';
import PageHeader from 'components/ui/page/header/PageHeader';
import PageFooterToolTip from 'components/ui/page/footer/tooltip/FooterTooltip';
import ServiceOverview from './overview/ServiceOverview';
import ServiceAPI from './api/ServiceAPI';
import ServiceProcesses from './processes/ServiceProcesses';
import ServiceEvents from './events/ServiceEvents';
import ServiceRegistry from './registry/ServiceRegistry';

import './Service.css';

export default function Service (state:any) {
  console.log(state)
    return (
        <div className="Page">
          <PageHeader breadcrumbs={['Service']} />
          <Tabs tabs={[
              { url: '/service/general', label: 'General' },
              { url: '/service/process', label: 'Processes' },
              { url: '/service/registry', label: 'Registry Keys' },
              { url: '/service/api', label: 'API' },
              { url: '/service/events', label: 'Events' }
           ]} />
          <div className="ContentContainer">
            <Switch>
              <Route path="/service/general"
                    render={() => <ServiceOverview />} />
              <Route path="/service/api"
                    render={() => <ServiceAPI  />} /> 
              <Route path="/service/process"
                    render={() => <ServiceProcesses  />} />
              <Route path="/service/registry" 
                    render={() => <ServiceRegistry  />} />
              <Route path="/service/events" 
                    render={() => <ServiceEvents  />} />
            </Switch>
          </div>
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