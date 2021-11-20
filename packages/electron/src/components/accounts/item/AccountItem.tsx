import { Link } from 'react-router-dom';
import {  useMachine } from '@xstate/react';
import AccountsStateMachine from './AccountItemState';
import { accountOrderIcon } from './components/ItemIcons';
import { activeButtons, launchingButtons, runningButtons, idleButtons } from './components/ItemActionButtons';
import './AccountItem.css';

const accountItemState = AccountsStateMachine();

export default function AccountItem ({ name, id }:any) {
    const [ state, send ] = useMachine(accountItemState);

    const killProcess = (e:any) => {
        e.preventDefault();
        send('KILL');
    };
    const launchGame = (e:any) => {
        e.preventDefault();
        send('LAUNCH');
    };
    const refreshAccount = (e:any) => {
        e.preventDefault();
        send('AUTH');
    };

    send("UNLOCK");
    console.log(state.value)
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
                   {state.value !== 'idle' && state.value !== 'running' ? 
                        launchingButtons({ 
                            state,
                            launchGame,
                        })  : null 
                    }
                    {state.value === 'running' ? 
                        runningButtons({ 
                            state,
                            killProcess,
                        }) : null 
                    }
                    {state.value === 'idle' ? 
                        idleButtons({ 
                            state,
                            launchGame,
                            refreshAccount,
                        }) : null 
                    }
            </div>
        </div>
    );
  };