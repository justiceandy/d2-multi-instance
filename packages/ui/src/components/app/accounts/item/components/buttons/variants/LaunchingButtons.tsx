import Icon from '@mdi/react';
import {      
    mdiHexagonSlice1,
    mdiHexagonSlice2,
    mdiHexagonSlice3,
    mdiHexagonSlice4,
    mdiHexagonSlice5,
    mdiHexagonSlice6, 
} from '@mdi/js';
import { LaunchButton, ButtonContainer, IconToolTip } from '../../../AccountItem.styled'
import { launchGame } from '../libs/ui';

export const LaunchingButtons = ({ state, id, send }:any) => {
    const iconLookup = {
        'Starting D2R': mdiHexagonSlice2,
        'Started D2R': mdiHexagonSlice3,
        'Token 1': mdiHexagonSlice4,
        'Token 2': mdiHexagonSlice5,
        'Saved Token': mdiHexagonSlice6,
        'Stored': mdiHexagonSlice6,
    };
    const thisIcon = iconLookup[state.context.tooltip] || mdiHexagonSlice1;
    return (
        <ButtonContainer>
            <LaunchButton onClick={(event) => launchGame({ event, send, id })}>
                <Icon path={thisIcon}
                    title="Launch Game"
                    size={1} />
            </LaunchButton>
        </ButtonContainer>
    )
}


export default LaunchingButtons;
