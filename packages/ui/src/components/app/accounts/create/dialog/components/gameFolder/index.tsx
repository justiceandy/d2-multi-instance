import React from 'react';
import GameFolderValid from './GameFolderValid';
import GameFolderValidate from './GameFolderValidate';
import GameFolderIdle from './GameFolderIdle';

import { DialogListItem, HiddenInput, GameFolderLabelContainer, DialogInputContainer } from '../../AccountCreateDialog.styled';

export default function GameFolderDialogItem ({ state, send, accounts }) {
    const fileRef = React.useRef<HTMLInputElement>(null);
    const nameRef = React.useRef<HTMLInputElement>(null);

    const removeFolder = (e:any) => {
        e.preventDefault();
        //send('RESET_FOLDER');
        return folderClick(e);
    }

    const folderClick = ({ event, fileRef }) => {
        event.preventDefault();
        fileRef.current.click();
        return ''
    }
    
    const fileChanged = (e:any) => {
        if(e.target.files && e.target.files.length){
            const payload = {
                name: nameRef.current.value,
                folder: e.target.files[0].path,
                accounts,
            }
            console.log('File Changed', payload)
            send('VALIDATE', payload)
        }
    }

    let {
        folder,   
        isExistingFolder, 
   } = state.context;

    return (
        <DialogListItem>
            <GameFolderLabelContainer> Game Folder </GameFolderLabelContainer>
            <DialogInputContainer>
                { state.value === 'idle' ? 
                   <GameFolderIdle
                     fileRef={fileRef}
                     folderClick={folderClick}
                   />
                : null }
                { state.value === 'validate' ? 
                   <GameFolderValidate />
                : null }
                { state.value === 'valid' ? 
                    <GameFolderValid
                        folder={folder}
                        removeFolder={removeFolder}
                        isExistingFolder={isExistingFolder}
                    />
                : null }
            </DialogInputContainer>
            <HiddenInput type="file" ref={fileRef} onChange={fileChanged} />
        </DialogListItem>
    )
}
