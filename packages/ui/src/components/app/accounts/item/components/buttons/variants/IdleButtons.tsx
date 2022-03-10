
import Icon from '@mdi/react';
import {  mdiPlay, mdiShieldKey } from '@mdi/js';
import { RefreshButton, LaunchButton, ButtonContainer, ActionButton } from '../../../AccountItem.styled';
import { launchGame, refreshAccount } from '../libs/ui';

export const IdleButtons = ({ id, send }:any) => {
    return (
        <ButtonContainer>
            <RefreshButton onClick={(event) => refreshAccount({ event, send, id })}>
                <Icon path={mdiShieldKey} size={1} />
            </RefreshButton>
            <LaunchButton onClick={(event) => launchGame({ event, send, id })}>
                <Icon path={mdiPlay} size={1} />
            </LaunchButton>
        </ButtonContainer>
    )
}

export default IdleButtons;
