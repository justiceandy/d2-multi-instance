import Icon from '@mdi/react';
import { mdiCloseCircleOutline, mdiProgressClose } from '@mdi/js';
import { TermButton, ButtonContainer, IconToolTip } from '../../../AccountItem.styled'

import { cancelAction } from '../libs/ui';

export const TerminatingButtons = ({ state, send, id }:any) => {
    return (
        <ButtonContainer>
            {state.value === "terminating"
             ? 
             <TermButton onClick={(event) => cancelAction({ event, send, id })}>
                <Icon path={mdiProgressClose} title="Terminating" size={1} />
             </TermButton>
             :     
            <TermButton onClick={(event) => cancelAction({ event, send, id })}>
                <Icon path={mdiCloseCircleOutline} title="Terminating" size={1} />
            </TermButton>
            }
        </ButtonContainer>
    )
}

export default TerminatingButtons;
