import { Link } from 'react-router-dom';
import {  useMachine } from '@xstate/react';
import { accountOrderIcon } from './components/ItemIcons';
import AccountItemStateMachine from './state/AccountItemState';
import { 
    activeButtons, launchingButtons, 
    runningButtons, idleButtons, 
    queButtons, terminatingButtons,
    authButtons 
} from './components/ItemActionButtons';

import './AccountItem.css';

let existingItemState:any = null;
let existingQueState:any = null;

/** 
 *  AccountItem:
 *  Component Renders a component inside AccountList
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
        <div className="AccountItem">
            <Link 
                className="AccountLink" to={{
                 pathname: `/accounts/${id}/edit/general`, 
            }}>
            <div className="AccountNameContainer">
                {accountOrderIcon(id)}
                <div className="AccountNameText">
                   <span>{name}</span>
                </div>
            </div>
            </Link>
            <div className="StatusIcons">
              {activeButtons({ state, send })}
            </div>
            <div className="actIcons">
                { launchingButtons({ state, send, qState, id }) }
                { runningButtons({ state,  send, qState, id }) }
                { idleButtons({ state, send, qState, id }) }
                { queButtons({ state, send, qState, id }) }
                { authButtons({ state, send, id }) }
                { terminatingButtons({ state, send, id }) }
            </div>
        </div>
    );
  };