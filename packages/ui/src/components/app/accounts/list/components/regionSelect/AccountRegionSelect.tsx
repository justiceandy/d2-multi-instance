import { FormControl, MenuItem, ThemeProvider, Select } from '@mui/material'
import { RegionSelectContainer } from '../../AccountList.styled';
import { Theme } from '../../../../../atoms';

export default function RegionSelect({ value, onChange }:any) {
  return (
    <RegionSelectContainer>
        <label>Region</label>
        <ThemeProvider theme={Theme.DropDown}>
          <FormControl>
            <Select
              id="account-region"
              value={value}
              label="Region"
              onChange={onChange}>
                <MenuItem value={'Default'}>Default</MenuItem>
                <MenuItem value={'NA'}>NA</MenuItem>
                <MenuItem value={'EU'}>EU</MenuItem>
                <MenuItem value={'Asia'}>Asia</MenuItem>
                <MenuItem value={'Offline'}>Offline</MenuItem>
            </Select>
          </FormControl>
        </ThemeProvider>
    </RegionSelectContainer>
  )
}
    