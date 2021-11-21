import './AccountList.css';
import { mdiAccountPlus, mdiExpandAllOutline} from '@mdi/js';
import AccountItem from '../item/AccountItem';
import PageHeader from 'components/ui/page/header/PageHeader';
import PageFooterToolTip from 'components/ui/page/footer/tooltip/FooterTooltip';


export default function AccountList ({ accounts = [] }:any) {
  console.log(accounts)
    return (
      <div className="AccountList">
        <PageHeader 
           breadcrumbs={[
             'Account List',
           ]}
           icons={[
             { icon: mdiAccountPlus, title: 'Add Acccount', url: '/accounts/create' },
             { icon: mdiExpandAllOutline, title: 'Launch All', url: '/accounts/create' },
           ]}
        />
        <div className="AccountListContainer">
          <ul>
              {accounts.map(
                ({ display }:any, i:any) => 
                <li key={i}><AccountItem name={display} id={i} /></li>)}
          </ul>
        </div>
        <PageFooterToolTip 
            text={"Only 1 account can launch at a time"}
        />
      </div>
    );
  };