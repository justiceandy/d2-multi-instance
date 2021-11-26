
import './OnboardingAccounts.css';

import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import {  
    mdiPlus,
} from '@mdi/js';

export default function OnboardingAccounts (state:any) {
    console.log(state)

    const addAccount = (e:any) => {
        e.preventDefault();

        return true;
    }
    return (
        <div className="OnboardingPage OnboardingAccounts">

            <div className="OnboardingInnerAccount">
                <h1>Game Accounts</h1>
                <p>Add a Game Folder to get started, you can customize the account settings
                    after the initial install.</p>
                <p>Note: Each Account needs its own Game Folder. You can sym link the data directory if storage is a concern </p>
                <div className="currentGameAccounts">
                    <span>No Accounts Added</span>
                    <Link to="#" onClick={addAccount}>
                        <Icon className="addAccountIcon" path={mdiPlus}
                                title="Add Account"
                                size={1} />
                    </Link>
                </div>
            </div>
         
        </div>
    );
  }; 