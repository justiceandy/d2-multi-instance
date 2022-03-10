import { Switch, ThemeProvider } from '@mui/material'
import { DragSwitchContainer  } from '../../AccountList.styled';
import { Theme } from '../../../../../atoms';

export const DragSwitch = ({ value = true }) => (
    <DragSwitchContainer>
      <ThemeProvider theme={Theme.Switch}>
        <label>Drag</label>
        <Switch value={value} />
      </ThemeProvider>
    </DragSwitchContainer>
  )


  export default DragSwitch;
