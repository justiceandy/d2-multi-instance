
import Icon from '@mdi/react';
import Tooltip from '@mui/material/Tooltip';
import {  
  mdiAccountCheck,
  mdiInformationOutline,
} from '@mdi/js';

import { 
  DialogListItem, 
  ValidNameIcon, 
  InValidNameIcon, 
  DialogInputContainer, 
  DialogInput, 
  DialogLabelContainer 
} from '../../AccountCreateDialog.styled';

export default function DisplayNameDialogItem ({ validateName, validName, nameRef }) {
    return (
        <DialogListItem>
              <DialogLabelContainer> Display Name </DialogLabelContainer>
              <DialogInputContainer>
                <DialogInput type="text" ref={nameRef} defaultValue="" onChange={(e) => validateName({ event: e })} placeholder="Display Name" />
                { validName ? 
                      <ValidNameIcon path={mdiAccountCheck} size={1} />
                        : 
                      <Tooltip title={'Display Name is required and must be unique'}>
                          <InValidNameIcon path={mdiInformationOutline} size={1} />
                      </Tooltip> }
            </DialogInputContainer>
        </DialogListItem>
    )
}
