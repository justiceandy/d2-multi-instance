import React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import createAccountDialogStateMachine from './state/AccountCreateDialogState';
import {  useMachine } from '@xstate/react';
import GameFolderDialogItem from './components/gameFolder'
import DisplayNameDialogItem from './components/displayName';

import Icon from '@mdi/react';
import {  
    mdiAccountPlus , 
} from '@mdi/js';

import { 
    Container, 
    CreateDialog, 
    ErrorContainer, 
    ErrorList, 
    ErrorItem,
    IconOnlyButton,
    AddAccountIcon,
    IconButton,
} from './AccountCreateDialog.styled';

//verifyAccount,
export default function CreateAccountDialog({ 
    title = 'Add Game Account',  
    accounts, 
    addAccount,
    iconOnly = false 
}:any) {
    const nameRef = React.useRef<HTMLInputElement>(null);
    const thisItemStateMachine = createAccountDialogStateMachine({ accounts });
    const [ state, send ]:any = useMachine(thisItemStateMachine);

    let {
         displayName, 
         errors, 
         folder, 
         validName, 
         validated,  
         isExistingFolder, 
         open 
    } = state.context;
 
    const handleClickOpen = () => send('OPEN');
    const handleClose = () => { send('RESET'); send('CLOSE') };

    const add = () => {
        //setUpload(true)
        const payload = {
            name: displayName,
            folder,
            accounts,
        }
        console.log('Adding New Account', payload)
        addAccount(payload)
        send('RESET')
        send('CLOSE')
    }

    const validateName = ({}) => {
        send('UPDATE_NAME', { 
            value: nameRef.current.value, 
            value2: displayName, 
            accounts, 
        })
    }

  
    const validButtons = () => [
        <Button onClick={handleClose} key={`btn-cancel`}>Cancel</Button>,
        <Button onClick={add} key={`btn-validate`}>Add</Button>
    ]

    const invalidButtons = () => [
        <Button onClick={handleClose} key={`btn-cancel`}>Cancel</Button>,
        <Button key={`btn-validate`}>Validate</Button>
    ]
    const renderErrors = ({ errors: [] }:any) => (
        <ErrorContainer>
            <ErrorList>
                { errors.map((i:any, index:number) => 
                    <ErrorItem key={`label-${index}`}>{i}</ErrorItem>)
                }
            </ErrorList>
        </ErrorContainer>
    )

    return (
      <Container>
        { iconOnly ? 
           <IconOnlyButton onClick={handleClickOpen}>
              <AddAccountIcon path={mdiAccountPlus} title="Add Account" size={1} />
           </IconOnlyButton>
        :
            <IconButton onClick={handleClickOpen}>
                <AddAccountIcon path={mdiAccountPlus} title="Add Account" size={1} />
                <span>Add Account</span>
            </IconButton>
        }
        <CreateDialog open={open}  className="ui-dialog" onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" component="span">
                <DisplayNameDialogItem validName={validName} validateName={validateName} nameRef={nameRef} />
                <GameFolderDialogItem state={state} send={send} accounts={accounts} />
                {errors.length && displayName.length >= 1 ?
                    renderErrors({ errors })
                : null }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
              { validated && !isExistingFolder ? validButtons() : invalidButtons() }
          </DialogActions>
        </CreateDialog>
      </Container>
    );
  }

