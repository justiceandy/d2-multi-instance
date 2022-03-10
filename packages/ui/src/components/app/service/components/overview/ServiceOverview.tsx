import { PageContent } from '../../../../atoms';
import { StatContainer, StatCard, StatCardWide, StatLabel, StatValue } from './ServiceOverview.styled'

export default function ServiceOverview ({
    processes = 0,
    databaseSize = "0mb",
    refreshCount = 0,
    accounts = 0,
    integrations = 0,
}) {
    return (
      <PageContent overlay container>
        <StatContainer>
            <StatCard>
                <StatLabel>Background Processes</StatLabel>
                <StatValue>{processes}</StatValue>
            </StatCard>
            <StatCard>
                <StatLabel>Database Size</StatLabel>
                 <StatValue>{databaseSize}</StatValue>
            </StatCard>
            <StatCard>
                <StatLabel>Tokens Refreshed</StatLabel>
                <StatValue>{refreshCount}</StatValue>
            </StatCard>
            <StatCard>
                <StatLabel>Saved Accounts</StatLabel>
                <StatValue>{accounts}</StatValue>
            </StatCard>
            <StatCardWide>
                <StatLabel>Running Accounts</StatLabel>
                <StatValue>{integrations}</StatValue>
            </StatCardWide>
            <StatCardWide>
                <StatLabel>Refresh Que</StatLabel>
                <StatValue>{integrations}</StatValue>
            </StatCardWide>
        </StatContainer>
      </PageContent>
    );
  };
