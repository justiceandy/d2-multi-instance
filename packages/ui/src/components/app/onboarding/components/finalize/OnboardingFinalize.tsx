
import './OnboardingFinalize.css';
import Tooltip from '@mui/material/Tooltip';

export default function OnboardingFinalize ({ state = 'idle', accounts = [] }:any) {
    const route = state.finalize || 'idle';
    console.log(route);
    return (
        <div className="OnBoardingContent">
        <div className="OnboardingPage OnboardingFinalize">
            <div className="OnboardingInnerAccount">
                <div className="OnboardingAccountTop">
                    <h1>Configured Accounts</h1>
                    { route === 'idle' ?
                        <div className="ConfiguredAccountContainer">
                            { accounts.map(({ display, folder }:any)=> {
                                return (
                                    <Tooltip key={display} title={folder}>
                                        <label>{display}</label>
                                    </Tooltip>
                                )
                            })}
                        </div>
                    : null }
                    { route === 'submitting' ? 
                        <h4>Configuring...</h4>
                    : null }
                     { route === 'loadDashboard' ? 
                        <h4>Starting Application</h4>
                    : null }
                </div>
                <h1>Bugs & Feature Requests</h1>
                <div className="MiddleConfigForm">
                   <p>This Software is open source, any contributions via Pull Requests, Issues or Feature Requests are welcome on the official github repository.</p>
                   <p>Discord Server is available questions/updates on releases</p>
                </div>
                <h1>Coming Soon</h1>
                <div className="MiddleConfigForm">
                   <p>Kernel Driver to support multiple accounts being in que at the same time.</p>
                   <p>Integration with 3rd Party Tools (Loot Filter/Map Assist) </p>
                </div>
            </div>
        </div>
    </div>
    );
  };