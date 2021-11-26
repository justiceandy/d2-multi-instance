import './Settings.css';
import { Switch, Route } from 'react-router-dom';
import SettingsDriverEdit from './driver/SettingsDriver';
import SettingsShortcutEdit from './shortcuts/SettingsShortcut';
import SettingsGeneralEdit from './general/SettingsGeneral';
import PageHeader from 'components/ui/page/header/PageHeader';
import Tabs from 'components/ui/tabs/Tabs';
import PageFooterToolTip from 'components/ui/page/footer/tooltip/FooterTooltip';

export default function Settings (state:any) {
    return (
        <div className="SettingsPage Page ui-form-page">
          <PageHeader breadcrumbs={['Settings']}/>
          <Tabs 
              tabs={[
                { exact: true, url: `/settings`, label: 'General' },
                { url: `/settings/shortcuts`, label: 'Shortcuts' },
                { url: `/settings/driver`, label: 'Kernel Driver' },
              ]}
          />
          <Switch>
            <Route exact path="/settings"
                   render={() => <SettingsGeneralEdit {...state} />} />
            <Route path="/settings/shortcuts"
                   render={() => <SettingsShortcutEdit {...state} />} />
            <Route path="/settings/driver" 
                   render={() => <SettingsDriverEdit {...state} />} />
          </Switch>
          <PageFooterToolTip text={"These override account level settings"} />
        </div>
    );
  };