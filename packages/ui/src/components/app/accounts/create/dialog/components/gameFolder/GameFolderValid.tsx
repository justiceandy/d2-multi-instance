
import Tooltip from '@mui/material/Tooltip';
import {  
    mdiFolderCheck,
    mdiFolderAlert,
} from '@mdi/js';

import { 
    ValidFolderContainer, 
    ValidFolderIcon, 
    DisabledFolderInput,
    ValidFolderButton 
} from '../../AccountCreateDialog.styled';

export default function GameFolderValid ({ folder, removeFolder, isExistingFolder }) {
    return (
        <ValidFolderContainer>
            <DisabledFolderInput type="text" disabled value={folder} />
            <ValidFolderButton onClick={removeFolder}>
                {isExistingFolder ?
                <Tooltip title={'Game folder already assigned to another account'}>
                   <ValidFolderIcon path={mdiFolderAlert} size={1} />
                </Tooltip>
                : <ValidFolderIcon path={mdiFolderCheck} size={1} />
                }
            </ValidFolderButton>
        </ValidFolderContainer>
    )
}
