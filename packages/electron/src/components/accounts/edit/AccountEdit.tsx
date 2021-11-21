
import './AccountEdit.css';
import { Switch, Route } from 'react-router-dom';
import AccountClientEdit from './client/AccountClient';
import AccountGeneralEdit from './general/AccountGeneral';
import AccountBnetEdit from './bnet/AccountBnet';
import AccountWindowEdit from './window/AccountWindow';
import AccountHotKeyEdit from './hotkey/AccountHotkey';
import Tabs from 'components/ui/tabs/Tabs';
import PageHeader from 'components/ui/page/header/PageHeader';
import PageFooterToolTip from 'components/ui/page/footer/tooltip/FooterTooltip';
import { mdiDelete, mdiArrowLeft, mdiArrowRight } from '@mdi/js';


export default function AccountEdit (state:any) {
  const accountId = state.match.params.accountId;
  const accountData = state.accounts[accountId];
  const accountName = accountData.display;

  const deleteAccount = (e:any) => {
    console.log(e);
    e.preventDefault();
  }
    return (
      <div className="AccountEdit Page">
        <PageHeader 
           breadcrumbs={[
             'Account',
             accountName,
           ]}
           icons={[
             { icon: mdiDelete, title: 'Delete Account', onClick: deleteAccount },
           ]}
        />
        <Tabs 
            tabs={[
              { url: `/accounts/${accountId}/edit/general`, label: 'General' },
              { url: `/accounts/${accountId}/edit/bnet`, label: 'Battle Net' },
              { url: `/accounts/${accountId}/edit/client`, label: 'Client Args' },
              { url: `/accounts/${accountId}/edit/window`, label: 'Window' },
              { url: `/accounts/${accountId}/edit/hotkey`, label: 'Hotkey' }
            ]}
         />
        <div className="ContentContainer">
          <Switch>
            <Route path="/accounts/:accountId/edit/general"
                   render={() => <AccountGeneralEdit {...accountData} />} />
            <Route path="/accounts/:accountId/edit/client"
                   render={() => <AccountClientEdit {...accountData} />} /> 
            <Route path="/accounts/:accountId/edit/bnet"
                   render={() => <AccountBnetEdit {...accountData} />} />
            <Route path="/accounts/:accountId/edit/window"
                   render={() => <AccountWindowEdit {...accountData} />} />
            <Route path="/accounts/:accountId/edit/hotkey" 
                   render={() => <AccountHotKeyEdit {...accountData} />} />
          </Switch>
        </div>
        <PageFooterToolTip 
            text={"Save events occur on changes"}
            icons={[
              { icon: mdiArrowLeft, title: 'Back to Accounts', onClick: deleteAccount },
              { icon: mdiArrowRight, title: 'Next Account', onClick: deleteAccount },
            ]}
        />
      </div>
    );
  };

