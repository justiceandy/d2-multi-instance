import { 
    FormGroup, 
    FormControlLabel, 
    Select, Checkbox, 
    FormControl, 
    InputLabel, 
    MenuItem,
    Grid, 
} from '@mui/material'

import { Link } from 'react-router-dom';

import {
    FormValueListItem,
    CheckboxItem,
    CheckboxInnerContainer,
    FormValueActionItem,
    FormValueEmptyItem,
    FormValueInput,
    FormValueGridItem,
    FormValueContainer,
    FormValueSelectItem,
} from './FormValues.styled';

const defaultOnChanged = (e:any) => {
    console.log('Value Change', e)
};

const inputs = {
    checkbox: ({ index, name, title = '', value = false, onChange = defaultOnChanged }:any) => {
        return (
        <CheckboxItem key={`ui-value-row${index}`}>
            <CheckboxInnerContainer>
                <FormGroup>
                    <FormControlLabel 
                        control={ <Checkbox checked={value} onClick={(event) => onChange({ event, name })}
                                    className="ui-form-values-input" /> }
                        label={title}  
                    />
                </FormGroup>
            </CheckboxInnerContainer>
        </CheckboxItem>
        )
    },
    select: ({ index, name, label, options, onChange = defaultOnChanged,  value }:any) => {
       
        return (
            <FormValueSelectItem key={`ui-value-row${index}`}>
                <FormControl fullWidth>
                    <InputLabel className="ui-form-select-box-label" id={`${label}-select-label`}>{label}</InputLabel>
                    <Select
                        className="ui-form-select-box"
                        labelId={`${label}-select-label`}
                        id={`${label}-select`}
                        value={value}
                        label={label}
                        onChange={(event) => onChange({ event, name })}
                    >
                    {options.map(
                        (i:any, index:any) => <MenuItem key={`ui-label-${label}-item-${index}`} className="ui-form-select-box-item" value={i.value}>{i.label}</MenuItem>
                    )}
                    </Select>
                </FormControl>
            </FormValueSelectItem>
        )
    },
    text: ({ index, name, placeholder, onChange = defaultOnChanged, defaultValue, value }:any) => {
        return (
            <FormValueListItem key={`ui-value-row${index}`}>
                <FormValueInput  
                    name={name}
                    type="text"
                    value={value}
                    defaultValue={defaultValue} 
                    placeholder={placeholder} 
                    onChange={(event) => onChange({ event, name })}
                />
            </FormValueListItem>
        )
    },
    grid: ({ rows = [], index }:any) => {
        return (
            <FormValueGridItem key={`ui-value-row${index}`}>
                <Grid container spacing={2} className="ui-form-value-grid-container">
                    { rows.map(({ title, onChange = defaultOnChanged }:any) => {
                        return (
                          <Grid id={`gridItem${title}`} className="ui-form-value-grid-item" item xs={6} md={8}>
                                <FormGroup>
                                    <FormControlLabel 
                                            control={<Checkbox onChange={onChange} className="ui-form-values-input" />}
                                            label={title}
                                    />
                                </FormGroup>
                         </Grid>
                        )
                    })}
                </Grid>
            </FormValueGridItem>
        )
    },
    password: ({ index, name, placeholder, onChange = defaultOnChanged, defaultValue, value }:any) => {
        return (
            <FormValueListItem key={`ui-value-row${index}`}>
                <FormValueInput 
                    name={name}
                    type="password"
                    value={value}
                    defaultValue={defaultValue} 
                    placeholder={placeholder} 
                    onChange={(event) => onChange({ event, name })} />
            </FormValueListItem>
        )
    },
    action: ({ index, label, onClick = defaultOnChanged }:any) => {
        return (
            <FormValueActionItem key={`ui-value-row${index}`}>
               <Link to="#" onClick={onClick}>{label}</Link>
            </FormValueActionItem>
        )
    },
    empty: ({ index }:any) => {
        return (
            <FormValueEmptyItem key={`ui-value-row${index}`} />
        )
    }
}

export default function FormValues ({ rows = [], children }:any) {
    return (
        <FormValueContainer>
            { children || null }
            <ul>
                {rows.length ? rows.map((i, index):any => inputs[i.type]({ index, ...i }))
                : null}
            </ul>
        </FormValueContainer>
    )
}
