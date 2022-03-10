import { PageContent } from '../../atoms';
import AccountList from '../accounts/list/AccountList';
import HomeOverview from './components/overview/HomeOverview'

export default function Home (settings:any) {
    return (
      <PageContent container={false}>
        <HomeOverview {...settings} />
        <AccountList {...settings} />
      </PageContent>
    );
  };
