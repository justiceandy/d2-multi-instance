import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import {  
    mdiPlay, 
    mdiShieldKey, 
    mdiAccessPoint,
    mdiHexagonSlice1,
    mdiHexagonSlice2,
    mdiHexagonSlice3,
    mdiHexagonSlice4,
    mdiHexagonSlice5,
    mdiHexagonSlice6,
    mdiCloseOctagon,
    mdiShieldSync
} from '@mdi/js';

const idleButtons = ({ state, launchGame, refreshAccount }:any) => {
    console.log(state);
    return (
        <div className="IdleButtons" >
        <Link to="game" onClick={launchGame}>
            <Icon className="LaunchIcon" path={mdiPlay}
            title="Launch Game"
            size={1} />
        </Link>
        <Link to="game" onClick={refreshAccount}>
            <Icon className="RefreshIcon" path={mdiShieldKey}
            title="Auth With Battle.net"
            size={1} />
        </Link>
        </div>
    )
}

const activeButtons = ({ state }:any) => {
    return (
        <div className="ActiveButtons">
            {state.value === 'running' ?
              <Link to="" onClick={() => null}>
              <Icon className="ActiveProcess" path={mdiAccessPoint}
                  title="Account is currently running"
                  size={1} />
               </Link>
            : null }
        </div>
    )
}

const runningButtons = ({ killProcess }:any) => {
    return (
        <div className="RunningButtons">
            <Icon className="TokenCapturedIcon" path={mdiShieldSync}
                title="Tokens being captured"
                size={1} />
            <Link to="" onClick={killProcess}>
                <Icon className="KillProcessIcon" path={mdiCloseOctagon}
                    title="Close Process"
                    size={1} />
            </Link>
        </div>
    )
}

const launchingButtons = ({ launchGame, state }:any) => {
    const iconLookup = {
        'starting': mdiHexagonSlice1,
        'started': mdiHexagonSlice2,
        'token1': mdiHexagonSlice3,
        'token2': mdiHexagonSlice4,
        'tokensStored': mdiHexagonSlice5,
        'running': mdiHexagonSlice6,
    };
    /* @ts-expect-error */
    const thisIcon = iconLookup[state.value];
    console.log(thisIcon, state.value)
    return (
        <div className="LaunchButtons">
            <Link to="game" onClick={launchGame}>
                <Icon className="LaunchIcon" path={thisIcon}
                title="Launch Game"
                size={1} />
            </Link>
        </div>
    )
}


export {
    idleButtons,
    activeButtons,
    launchingButtons,
    runningButtons,
}

export default {
    idleButtons,
    activeButtons,
    launchingButtons,
    runningButtons,
}