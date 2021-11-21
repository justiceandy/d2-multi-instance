import './Settings.css';
import { Switch, Route } from 'react-router-dom';
import SettingsApiEdit from './api/SettingsAPI';
import SettingsDriverEdit from './driver/SettingsDriver';
import SettingsShortcutEdit from './shortcuts/SettingsShortcut';
import SettingsGeneralEdit from './general/SettingsGeneral';
import PageHeader from 'components/ui/page/header/PageHeader';
import Tabs from 'components/ui/tabs/Tabs';
import PageFooterToolTip from 'components/ui/page/footer/tooltip/FooterTooltip';

export default function Settings (state:any) {
  console.log(state)
    return (
        <div className="SettingsPage Page">
          <PageHeader breadcrumbs={['Settings']}/>
          <Tabs 
              tabs={[
                { url: `/settings/general`, label: 'General' },
                { url: `/settings/api`, label: 'API' },
                { url: `/settings/shortcuts`, label: 'Shortcuts' },
                { url: `/settings/driver`, label: 'Kernel Driver' },
              ]}
          />
          <Switch>
            <Route path="/settings/general"
                   render={() => <SettingsGeneralEdit {...state} />} />
            <Route path="/settings/api"
                   render={() => <SettingsApiEdit {...state} />} />
            <Route path="/settings/shortcuts"
                   render={() => <SettingsShortcutEdit {...state} />} />
            <Route path="/settings/driver" 
                   render={() => <SettingsDriverEdit {...state} />} />
          </Switch>
          <PageFooterToolTip text={"These override account level settings"} />
        </div>
    );
  };