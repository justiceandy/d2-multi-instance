import { Link } from 'react-router-dom';
import { useMachine } from '@xstate/react';

import AccountItemStateMachine from './state/AccountItemState';
import { accountOrderIcon } from './components/icons/ItemIcons';
import ItemActionButtons from './components/buttons/ItemActionButtons';

import {
    Container,
    InfoContainer,
    NameContainer,
    AccountInfoButton,
} from './AccountItem.styled';

let existingItemState:any = null;
let existingQueState:any = null;

/** 
 *  AccountItem:
 *  Component Renders inside AccountList
 *      - Has internal state / action management
 *      - Optional Que Machine for multiple instances
 **/
export default function AccountItem ({ name, id, QueState = null, ItemState = null }:any) {

    // Item State (passed or initialized)
    const thisItemStateMachine = ItemState || existingItemState || AccountItemStateMachine({ 
        index: id, 
        QueMachine: QueState,
    });
    existingItemState = thisItemStateMachine;

    // Que State (passed or initialized)
     const thisQueState = QueState || existingQueState;
           existingQueState = thisQueState;

    // Destruct machines
    const [ state, send ] = useMachine(thisItemStateMachine);
    const [ qState ] = useMachine(thisQueState);
    
    return (
        <Container>
            <AccountInfoButton>
                <InfoContainer>
                    {accountOrderIcon(id)}
                    <NameContainer>
                      <span>{name}</span>
                    </NameContainer>
                </InfoContainer>
            </AccountInfoButton>
           <ItemActionButtons
                state={ state}
                send={send} 
                qState={qState}
                id={id}>
           </ItemActionButtons>
        </Container>
    );
  };
