import Icon from '@mdi/react';
import { mdiShieldSync, mdiAccessPoint, mdiCloseOctagon } from '@mdi/js';
import { killProcess } from '../libs/ui';
import { TokenCaptureButton, ButtonContainer, KillProcessButton, ActiveProcessButton } from '../../../AccountItem.styled'

const RunningButtons = ({ id, send }:any) => {
    return (
        <ButtonContainer style={{ gap: '0em'}}>
            <ActiveProcessButton onClick={() => null}>
                <Icon path={mdiAccessPoint} title="Account is currently running" size={1} />
            </ActiveProcessButton>
            <TokenCaptureButton>
                <Icon path={mdiShieldSync} size={1} />
            </TokenCaptureButton>
            <KillProcessButton onClick={(event) => killProcess({ event, send, id })}>
                <Icon path={mdiCloseOctagon} size={1} />
            </KillProcessButton>
        </ButtonContainer>
    )
}

export default RunningButtons;
