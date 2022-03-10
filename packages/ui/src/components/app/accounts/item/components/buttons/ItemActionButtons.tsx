import { 
    IdleButtons,
    QueButtons,
    ActiveButtons,
    LaunchingButtons,
    RunningButtons,
    TerminatingButtons,
    AuthButtons,
} from './variants';

import {
    IconContainer,
    IconToolTip,
} from '../../AccountItem.styled';

import { 
    shouldShowIdleButtons as showIdle,
    shouldShowRunningButtons as showRunning,
    shouldShowLaunchButtons as showLaunch,
    shouldShowAuthButtons as showAuth,
    shouldShowQueButtons as showQue,
    shouldShowTermButtons as showTerm,
    shouldShowActiveButtons as showActive,
} from './libs/shouldShow';
/** 
 *  AccountItemActionButtons:
 *  Displays buttons based on component state for interacting with accounts
 **/
export default function ItemActionButtons (props:any) {
    return (
        <IconContainer>
            <IconToolTip>{props.state.context.tooltip}</IconToolTip>
            { showLaunch(props) ? LaunchingButtons(props) : null}
            { showRunning(props) ? RunningButtons(props) : null }
            { showIdle(props) ? IdleButtons(props) : null }
            { showQue(props) ? QueButtons(props) : null }
            { showAuth(props) ? AuthButtons(props) : null }
            { showTerm(props) ? TerminatingButtons(props) : null }
        </IconContainer>
    );
  };
