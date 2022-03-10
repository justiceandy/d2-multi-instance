import { mdiPlus, mdiMinus } from '@mdi/js';
import { removeFromQue, addToQue } from '../libs/ui';
import { QueButton, ButtonContainer } from '../../../AccountItem.styled'
import Icon from '@mdi/react';

export const QueButtons = ({ id, send, qued = false }:any) => {
    const inQue = qued ? true : false;
    return (
        <ButtonContainer>
            {inQue ? 
               <QueButton onClick={(event) => removeFromQue({ event, send, id })}>
                    <Icon
                        path={mdiMinus}
                        title="Remove from Que"
                        size={1} />
               </QueButton>
            : 
            <QueButton onClick={(event) => addToQue({ event, send })}>
                <Icon 
                    path={mdiPlus}
                    title="Add to Que"
                    size={1} />
            </QueButton> }
        </ButtonContainer>
    )
}

export default QueButtons;
