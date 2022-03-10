import {  mdiArrowLeft, mdiArrowRight } from '@mdi/js';
import { PageHeader, FooterTooltip, PageContent } from '../../atoms';
import './Integrations.css';

export default function Integrations (state:any) {
    return (
        <PageContent>
          <PageHeader breadcrumbs={['Integrations']} />
          <div className="ContentContainer">
            <div className="ComingSoon">
                 <p>Feature Disabled</p>
            </div>
          </div>
          <FooterTooltip 
              text={"Additional Utilities for D2R"}
              icons={[
                { icon: mdiArrowLeft, title: 'Back to Accounts'  },
                { icon: mdiArrowRight, title: 'Next Account' },
              ]}
          />
        </PageContent>
    );
  };
