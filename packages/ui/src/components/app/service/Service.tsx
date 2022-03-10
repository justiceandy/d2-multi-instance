import {  mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { Switch, Route } from 'react-router-dom';
import { PageHeader, Tabs, FooterTooltip, PageContent } from '../../atoms';
import {
      ServiceApi,
      ServiceEvents,
      ServiceOverview,
      ServiceProcesses,
      // ServiceRegistry,
      ServiceStorage,
} from './components';

import './Service.css';

export default function Service (state:any) {
    return (
        <PageContent>
          <PageHeader breadcrumbs={['Service']} />
          <Tabs 
            active={'General'}
            tabs={[
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
                  render={() => <ServiceApi  />} /> 
            <Route path="/service/process"
                  render={() => <ServiceProcesses  />} />
            <Route path="/service/registry" 
                  render={() => <ServiceStorage  />} />
            <Route path="/service/events" 
                  render={() => <ServiceEvents  />} />
          </Switch>
        </PageContent>
    );
  };
