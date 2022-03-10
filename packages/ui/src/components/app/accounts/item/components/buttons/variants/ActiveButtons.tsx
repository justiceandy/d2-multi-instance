
import Icon from '@mdi/react';
import {  mdiAccessPoint } from '@mdi/js';
import { ActiveProcessButton, ButtonContainer} from '../../../AccountItem.styled'

export const ActiveButtons = () => (
    <ButtonContainer>
        <ActiveProcessButton onClick={() => null}>
            <Icon 
                path={mdiAccessPoint}
                title="Account is currently running"
                size={1} />
        </ActiveProcessButton>
    </ButtonContainer>
)

export default ActiveButtons;
