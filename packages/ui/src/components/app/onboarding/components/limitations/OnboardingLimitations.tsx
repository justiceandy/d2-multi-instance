
import './OnboardingLimitations.css';

// 
export default function OnboardingLimitations () {
    return (
        <div className="OnBoardingContent">
            <div className="OnboardingPage OnboardingLimitations">
                <div className="OnboardingPageContent">
                    <div className="intro">
                        <h3>Battle.net Authentication:</h3>
                        <p>Before using this application you should understand how battle.net authentication works:</p>
                    </div>
                    <div className="about">
                        <p>Blizzard uses 1 time use security tokens that prove you know the password to a specific account.</p>
                        <p>These tokens have an expiration date and are primarily refreshed during 4 events.</p>
                        <ol>
                            <li>Login with Battle.net Client</li>
                            <li>Account passed through Login Que</li>
                            <li>Refresh Event while Playing (Every 2 hours)</li>
                            <li>Mandatory Patch Rollout</li>
                        </ol>
                        <p>Tokens are stored in a Single Registry Key (OSI) so there are collisions when running multiple accounts</p>
                    </div>
                    <div className="legal">
                        <h3>Battle.net Limitations</h3>
                        <ul>
                            <li>Accounts can only be logged into 1 Region at a time</li>
                            <li>Multiple Accounts cannot be in que at the same time due to collisions in the registry key.</li>
                        </ul>
                    </div>
            </div>
        </div>
        
    </div>
    );
  };