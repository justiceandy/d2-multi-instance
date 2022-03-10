import React from 'react';
import Icon from '@mdi/react';
import Button from '@mui/material/Button';
import {  
    mdiFolderSearch,
} from '@mdi/js';

import { GameFolderButton } from '../../AccountCreateDialog.styled';


export default function GameFolderValidate ({ folderClick, fileRef }) {
    return (
        <GameFolderButton onClick={(event) => folderClick({ event, fileRef })}>
            <Icon className="idleFolderIcon" path={mdiFolderSearch } size={1} />
            <label>Select D2R.exe in Game Folder </label>
        </GameFolderButton>
    )
}
