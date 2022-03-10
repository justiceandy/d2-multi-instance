import { Switch, Route } from 'react-router-dom';
import { PageHeader, Tabs, FooterTooltip, PageContent } from '../../atoms'; 

import {
  SettingsDriver,
  SettingsGeneral,
  SettingsShortcut,
} from './components';

import './Settings.css';

export default function Settings (state:any) {
    return (
        <PageContent>
          <PageHeader breadcrumbs={['Settings']}/>
          <Tabs 
              active={'General'}
              tabs={[
                { exact: true, url: `/settings`, label: 'General' },
                { url: `/settings/shortcuts`, label: 'Shortcuts' },
                { url: `/settings/driver`, label: 'Kernel Driver' },
              ]}
          />
          <Switch>
            <Route exact path="/settings"
                   render={() => <SettingsGeneral {...state} />} />
            <Route path="/settings/shortcuts"
                   render={() => <SettingsShortcut {...state} />} />
            <Route path="/settings/driver" 
                   render={() => <SettingsDriver {...state} />} />
          </Switch>
          <FooterTooltip icons={[]} text={"These override account level settings"} />
        </PageContent>
    );
  };
