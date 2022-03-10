import Icon from '@mdi/react';
import {      
    mdiHexagonSlice1,
    mdiHexagonSlice2,
    mdiHexagonSlice3,
    mdiHexagonSlice4,
    mdiHexagonSlice5,
    mdiHexagonSlice6, 
} from '@mdi/js';

import { RefreshButton, ButtonContainer, IconToolTip } from '../../../AccountItem.styled'
import { launchGame } from '../libs/ui';

export const AuthButtons = ({ state, send, id }:any) => {
    const iconLookup = {
        'Starting Battle.net': mdiHexagonSlice2,
        'Started Battle.net': mdiHexagonSlice3,
        'Signin In': mdiHexagonSlice4,
        'Token 1': mdiHexagonSlice5,
        'Token 2': mdiHexagonSlice6,
        'Saved Token': mdiHexagonSlice6,
    };
    
    const thisIcon = iconLookup[state.context.tooltip] || mdiHexagonSlice1;
    return (
        <ButtonContainer>
            <RefreshButton onClick={(event) => launchGame({ event, send, id })}>
                <Icon path={thisIcon} title="Launch Game" size={1} />
            </RefreshButton>
        </ButtonContainer>
    )
}
export default AuthButtons;
