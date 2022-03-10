
import './OnboardingAccounts.css';

import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import {  
    mdiDelete,
    mdiFolderCheck ,
    mdiAccountCheck  
} from '@mdi/js';
import { AccountCreateDialog } from '../../../accounts';

export default function OnboardingAccounts ({ 
    addAccount, removeAccount, verifyAccount, accounts }:any) {

    const showNone = () => {
        return (
            <span className="NoCurrentAccounts">No Accounts Added</span>
        )
    }

    const accountItem = ({ folder, name }:any) => {
        return (
            <div key={`account-${name}`} className="OnboardAccount">
                <div className="OnboardAccountName">
                   <Icon className="ValidAccountIcon" path={mdiAccountCheck} size={1} />
                   <span>{name}</span>
                </div>
                <div className="OnboardAccountDir">
                     <Icon className="ValidFolderAccountIcon" path={mdiFolderCheck} size={1} />
                     <label>{folder}</label>
                </div>
                <div className="OnboardAccountBtns">
                    <Link to="#" onClick={(e) => removeAccount({ event: e, account: name })}>
                        <Icon className="RemoveAccountIcon" path={mdiDelete}
                            title="Remove Account"
                            size={1} />
                    </Link>
                </div>
            </div>
        )
    }
    const showAccounts = () => {
        return (
            <div className="AddedAccounts">
                { accounts.map((i:any) => accountItem(i)) }
            </div>
        )
    }

    return (
        <div className="OnBoardingContent">
            <div className="OnboardingPage OnboardingAccounts">
                <div className="OnboardingInnerAccount">
                    <div className="OnboardingAccountTop">
                        <h1>Game Accounts</h1>
                        <div>Add a Game Folder to get started, you can customize the account settings
                            after the initial install.</div>
                        <div className="BoldRedP">Note: Each Account needs its own Game Folder</div>
                    </div>

                    <div className="AccountBar">
                         <AccountCreateDialog addAccount={addAccount} accountLength={accounts.length} accounts={accounts}  />
                        <label>Accounts <span>({accounts.length})</span></label>
                    </div>
                   
                    <div className="CurrentGameAccounts">
                        { accounts.length ? showAccounts() : showNone() }
                    </div>
                </div>
            </div>
        </div>
    );
  }; 
