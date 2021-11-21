import {  mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import PageHeader from 'components/ui/page/header/PageHeader';
import PageFooterToolTip from 'components/ui/page/footer/tooltip/FooterTooltip';

import './Integrations.css';

export default function Integrations (state:any) {
  console.log(state)
    return (
        <div className="Page">
          <PageHeader breadcrumbs={['Integrations']} />
          <div className="ContentContainer">
            {/* <Switch>
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
            </Switch> */}
            <div className="ComingSoon">
                 <p>Coming Soon</p>
            </div>
          </div>
          <PageFooterToolTip 
              text={"Additional Utilities for D2R"}
              icons={[
                { icon: mdiArrowLeft, title: 'Back to Accounts'  },
                { icon: mdiArrowRight, title: 'Next Account' },
              ]}
          />
        </div>
    );
  };