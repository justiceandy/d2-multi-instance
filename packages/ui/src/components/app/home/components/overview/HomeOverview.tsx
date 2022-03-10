

import { PageHeader } from '../../../../atoms';
import { mdiHomeCircle } from '@mdi/js';
import Tooltip from '@mui/material/Tooltip';
import {
    OverviewItem as Item,
    OverviewItems as Items,
    OverviewSection as Section,
    OverviewContainer as Container,
    DisabledItem as Disabled,
    EnabledItem as Enabled,
} from './HomeOverview.styled';


const statusLabel = (settingValue:string) => 
  settingValue ?
    <Enabled>Enabled</Enabled> 
  : <Disabled>Disabled</Disabled>;

export default function HomeOverview ({ 
    accountNumber = 0, 
    api = null,
    changeWindowTitles = null, 
    notifications = null,
    automatedLogin = null,
    kernelDriver = null,
}) {
    return (
        <Container>
          <PageHeader breadcrumbs={['Overview']} icon={mdiHomeCircle } />
          <Section>
            <Items>
              <Item>
                <Tooltip title={'Display Windows Notifications for App Events'}>
                  <label> Notifications:  </label>
                </Tooltip>
                {statusLabel(notifications)}
              </Item>
              <Item>
                <Tooltip title={'Expose Internal GraphQL on local network'}>
                  <label> GraphQL API:  </label>
                </Tooltip>
                {statusLabel(api)}
              </Item>
              <Item>
                <Tooltip title={'Use OCR based Automation for Login'}>
                  <label> Automation:  </label>
                </Tooltip>
                {statusLabel(automatedLogin)}
              </Item>
              <Item>
                <Tooltip title={'Change D2R Window Title to Account name on launch'}>
                  <label> Manage Window Titles:  </label>
                </Tooltip>
                {statusLabel(changeWindowTitles)}
              </Item>
              <Item>
                <Tooltip title={'Expose Internal GraphQL on local network'}>
                  <label> Kernel Driver:  </label>
                </Tooltip>
                {statusLabel(kernelDriver)}
              </Item>
            </Items>
          </Section>
          <Section>
            <Items>
              <Item>Registered Accounts:  <Enabled>{accountNumber}</Enabled></Item>
              <Item>Running Processes:  <Enabled>0</Enabled></Item>
              <Item>Battlenet Connection:  <Enabled>Allow</Enabled></Item>
              <Item>Default Region:  <Enabled>Allow</Enabled></Item>
            </Items>
          </Section>
        </Container>
    );
  };
