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
    mdiShieldSync,
    mdiPlus,
    mdiMinus ,
    mdiProgressClose,
    mdiCloseCircleOutline,
} from '@mdi/js';

import {
    shouldShowIdleButtons,
    shouldShowRunningButtons,
    shouldShowLaunchButtons,
    shouldShowAuthButtons,
    shouldShowQueButtons,
    shouldShowTermButtons,  } from './libs/shouldShow';

import {
    killProcess,
    cancelAction,
    launchGame,
    addToQue,
    removeFromQue,
    refreshAccount } from './libs/ui';

const idleButtons = ({ state, id, qState, send }:any) => {
    if(!shouldShowIdleButtons({ state, id, qState })) return null
    return (
        <div className="IdleButtons" >
        <Link to="game" onClick={(event) => launchGame({ event, send, id })}>
            <Icon className="LaunchIcon" path={mdiPlay}
            title="Launch Game"
            size={1} />
        </Link>
        <Link to="game" onClick={(event) => refreshAccount({ event, send, id })}>
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

const runningButtons = ({ state, id, qState, send }:any) => {
    if(!shouldShowRunningButtons({ state, id, qState })) return null
    return (
        <div className="RunningButtons">
            <Icon className="TokenCapturedIcon" path={mdiShieldSync}
                title="Tokens being captured"
                size={1} />
            <Link to="" onClick={(event) => killProcess({ event, send, id })}>
                <Icon className="KillProcessIcon" path={mdiCloseOctagon}
                    title="Close Process"
                    size={1} />
            </Link>
        </div>
    )
}



const launchingButtons = ({ state, id, qState, send }:any) => {
    if(!shouldShowLaunchButtons({ state, id, qState })) return null
    const iconLookup = {
        'starting': mdiHexagonSlice1,
        'started': mdiHexagonSlice2,
        'token1': mdiHexagonSlice3,
        'token2': mdiHexagonSlice4,
        'tokensStored': mdiHexagonSlice5,
        'running': mdiHexagonSlice6,
    };
    /* @ts-expect-error */
    const thisIcon = iconLookup[state.value] || mdiHexagonSlice2;
    return (
        <div className="LaunchButtons">
            <label>{state.context.tooltip || state.value}</label>
            <Link to="game" onClick={(event) => launchGame({ event, send, id })}>
                <Icon className="LaunchIcon" path={thisIcon}
                title="Launch Game"
                size={1} />
            </Link>
        </div>
    )
}

const authButtons = ({ state, send, id }:any) => {
    if(!shouldShowAuthButtons({ state })) return null
    console.log(state.context.appName);
    const iconLookup = {
        'starting': mdiHexagonSlice1,
        'started': mdiHexagonSlice2,
        'token1': mdiHexagonSlice3,
        'token2': mdiHexagonSlice4,
        'tokensStored': mdiHexagonSlice5,
        'running': mdiHexagonSlice6,
    };
    /* @ts-expect-error */
    const thisIcon = iconLookup[state.value] || mdiHexagonSlice2;
    return (
        <div className="AuthButtons">
            <label>{state.context.tooltip}</label>
            <Link to="game" onClick={(event) => launchGame({ event, send, id })}>
                <Icon className="AuthIcon" path={thisIcon}
                title="Launch Game"
                size={1} />
            </Link>
        </div>
    )
}

const terminatingButtons = ({ state, send, id }:any) => {
    if(!shouldShowTermButtons({ state })) return null
    return (
        <div className="TermButtons">
            <label>{state.value}</label>
            {state.value === "terminating"
             ? 
             <Link to="game" onClick={(event) => cancelAction({ event, send, id })}>
                <Icon className="termIcon" path={mdiProgressClose}
                title="Terminating"
                size={1} />
             </Link>
             :     
            <Link to="game" onClick={(event) => cancelAction({ event, send, id })}>
                <Icon className="termIcon" path={mdiCloseCircleOutline}
                title="Terminating"
                size={1} />
            </Link>
            }
        </div>
    )
}

const queButtons = ({ qState, id, state, send }:any) => {
    if(!shouldShowQueButtons({ state, qState })) return null
    const inQue = false;
    return (
        <div className="QueButtons">
            {inQue ? 
               <Link to="game" onClick={(event) => removeFromQue({ event, send, id })}>
                <Icon className="removeQueIcon" path={mdiMinus}
                title="Remove from Que"
                size={1} />
               </Link>
            : 
            <Link to="game" onClick={(event) => addToQue({ event, send })}>
                <Icon className="addQueIcon" path={mdiPlus}
                title="Add to Que"
                size={1} />
           </Link> }
        </div>
    )
}

export {
    idleButtons,
    queButtons,
    activeButtons,
    launchingButtons,
    runningButtons,
    terminatingButtons,
    authButtons,
}

export default {
    idleButtons,
    queButtons,
    activeButtons,
    launchingButtons,
    runningButtons,
    terminatingButtons,
    authButtons,
}