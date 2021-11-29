
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import createAccountDialogStateMachine from './state/CreateAccountDialogState';
import {  useMachine } from '@xstate/react';

import Icon from '@mdi/react';
import {  
    mdiFolderSearch,
    mdiAccountPlus , 
    mdiInformationOutline, 
    mdiFolderCheck,
    mdiFolderAlert,
    mdiAccountCheck ,
} from '@mdi/js';

import './CreateAccountDialog.css';
import { Link } from 'react-router-dom';

//verifyAccount,
export default function CreateAccountDialog({ title = 'Add Game Account',  accounts, addAccount }:any) {
    const fileRef = React.useRef<HTMLInputElement>(null);
    const nameRef = React.useRef<HTMLInputElement>(null);
    const thisItemStateMachine = createAccountDialogStateMachine({ accounts });
    // State Booleans
    // const [ open, setOpen] = React.useState(false);
    // const [ valid, setValid ] = React.useState(false);
    const [ state, send ]:any = useMachine(thisItemStateMachine);

    /* @ts-expect-error */
    let { displayName, errors, folder, validFolder,  validName, validated,  isExistingFolder, open } = state.context;
    
    // const isValidName = (displayName:string) => {
    //     const matchingAccountName = accounts.filter(({ display }:any) => display === displayName).pop();
    //     console.log('Valid Name',  displayName, displayName.length > 1 && !matchingAccountName)
    //     return displayName.length > 1 && !matchingAccountName ? setValidName(true) : setValidName(false);
    // }

    // console.log('Dialog', state.value, state.context, valid)
    // console.log('Dialog', {
    //     displayName, error, folder, validFolder, validName, validated
    // })

    
    const handleClickOpen = () => {  
        console.log('UPDATE_ACCOUNTS', { accounts })
        send('OPEN') 
    };
    const handleClose = () => { send('RESET'); send('CLOSE') };

    const folderClick = (e:any) => {
        e.preventDefault();
        /* @ts-expect-error */
        fileRef.current.click();
        return ''
    }

    const removeFolder = (e:any) => {
        e.preventDefault();
        //send('RESET_FOLDER');
        return folderClick(e);
    }

    const fileChanged = (e:any) => {
        if(e.target.files && e.target.files.length){
            const payload = {
                /* @ts-expect-error */
                name: nameRef.current.value,
                folder: e.target.files[0].path,
                accounts,
            }
            console.log('File Changed', payload)
            send('VALIDATE', payload)
        }
    }

    // const validate = () => {
    //     const payload = {
    //         name: displayName,
    //         folder,
    //         accounts,
    //     }
    //     console.log('Validating', payload)
    //     send('VALIDATE', payload)
    // }

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
          /* @ts-expect-error */
            value: nameRef.current.value, 
            value2: displayName, 
            accounts, 
        })
    }

  
    const validButtons = () => {
        return [
            <Button onClick={handleClose} key={`btn-cancel`}>Cancel</Button>,
            <Button onClick={add} key={`btn-validate`}>Add</Button>
        ]
    }
    const invalidButtons = () => {
        return [
            <Button onClick={handleClose} key={`btn-cancel`}>Cancel</Button>,
            <Button key={`btn-validate`}>Validate</Button>
        ]
    }

    return (
      <div>
         <Button onClick={handleClickOpen}>
            <Icon className="AddAccountIcon" path={mdiAccountPlus} title="Add Account" size={1} />
             <span>Add Account</span>
        </Button>
        <Dialog
          open={open}
          className="ui-dialog"
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" component="span">
                <ul>
                    <li key="alertDiag1">
                        <div className="dialogLabel">
                           Display Name
                         </div>
                         <div className="dialogValue">
                          <input type="text" ref={nameRef} defaultValue="" onChange={(e) => validateName({ event: e })} placeholder="Display Name" />

                          { validName
                                 ? <Icon className="displayNameValidAlertIcon" path={mdiAccountCheck} size={1} />
                                 : 
                                 <Tooltip title={'Display Name is required and must be unique'}>
                                  <Icon className="displayNameErrorAlertIcon" path={mdiInformationOutline} size={1} />
                                 </Tooltip> 
                          }
                        </div>
                    </li>
                    <li key="alertDiag2">
                       <div className="dialogLabel gameFolder">
                           Game Folder
                        </div>
                        <div className="dialogValue">
                            { state.value === 'idle' ? 
                                <div>
                                    <Link className="idleFolderLink" to="#" onClick={folderClick}>
                                        <Icon className="idleFolderIcon" path={mdiFolderSearch } size={1} />
                                        <label>Select D2R.exe in Game Folder </label>
                                    </Link>
                                </div>
                            : null }
                            { state.value === 'validate' ? 
                                <CircularProgress className="fileLoaderIcon" />
                            : null }
                            { state.value === 'valid' ? 
                                <div className="validFolderText">
                                    <input type="text" disabled value={folder} className="disabledValidFolder" />
                                    <Link className="folderLink" to="#" onClick={removeFolder}>
                                        {isExistingFolder ?
                                         <Tooltip title={'Game folder already assigned to another account'}>
                                           <Icon className="dialogValidFolderIcon" path={mdiFolderAlert} size={1} />
                                        </Tooltip>
                                        :  <Icon className="dialogValidFolderIcon" path={mdiFolderCheck} size={1} />
                                        }
                                    </Link>
                                </div>
                            : null }
                        </div>
                        {errors.length && displayName.length >= 1?
                            <div className="dialogError">
                                <ul>
                                { errors.map((i:any, index:number) => <li key={`label-${index}`}>{i}</li>)}
                                </ul>
                            </div>
                        : null }
                        <input className="hiddenInput" type="file" ref={fileRef} onChange={fileChanged} />
                    </li>
                </ul>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
              { validated && !isExistingFolder ? validButtons() : invalidButtons() }
          </DialogActions>
        </Dialog>
      </div>
    );
  }