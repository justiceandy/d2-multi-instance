
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

import './FormValues.css';

const defaultOnChanged = (e:any) => {
    console.log('Value Change', e)
};

const inputs = {
    checkbox: ({ index, name, title = '', value = false, onChange = defaultOnChanged }:any) => {
        return (
        <li key={`ui-value-row${index}`} className="ui-form-li-centered">
            <div className="ui-form-values-input-container">
                <FormGroup>
                    <FormControlLabel 
                        control={ <Checkbox checked={value} onClick={(event) => onChange({ event, name })}
                                    className="ui-form-values-input" /> }
                        label={title}  
                    />
                </FormGroup>
            </div>
        </li>
        )
    },
    select: ({ index, name, label, options, onChange = defaultOnChanged,  value }:any) => {
       
        return (
            <li key={`ui-value-row${index}`}>
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
                        (i:any) => <MenuItem className="ui-form-select-box-item" value={i.value}>{i.label}</MenuItem>
                    )}
                    </Select>
                </FormControl>
            </li>
        )
    },
    text: ({ index, name, placeholder, onChange = defaultOnChanged, defaultValue, value }:any) => {
        return (
            <li key={`ui-value-row${index}`}>
                <input  className="ui-form-values-input ui-form-values-text"  
                    name={name}
                    type="text"
                    value={value}
                    defaultValue={defaultValue} 
                    placeholder={placeholder} 
                    onChange={(event) => onChange({ event, name })}
                />
            </li>
        )
    },
    grid: ({ rows = [], index }:any) => {
        return (
            <li key={`ui-value-row${index}`} className="ui-form-value-grid-li">
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
            </li>
        )
    },
    password: ({ index, name, placeholder, onChange = defaultOnChanged, defaultValue, value }:any) => {
        return (
            <li key={`ui-value-row${index}`}>
                <input className="ui-form-values-input ui-form-values-password" 
                    name={name}
                    type="password"
                    value={value}
                    defaultValue={defaultValue} 
                    placeholder={placeholder} 
                    onChange={(event) => onChange({ event, name })} />
            </li>
        )
    },
    action: ({ index, label, onClick = defaultOnChanged }:any) => {
        return (
            <li key={`ui-value-row${index}`} className="ui-form-action-li">
               <Link to="#" onClick={onClick}>{label}</Link>
            </li>
        )
    },
    empty: ({ index }:any) => {
        return (
            <li key={`ui-value-row${index}`} className="ui-form-value-empty"></li>
        )
    }
}

export default function FormValues ({ rows = [] }) {
    return (
        <div className="ui-form-values">
            <ul>
                {rows.length ?
                    /* @ts-expect-error */
                    rows.map((i, index):any => inputs[i.type]({ index, ...i }))
                : null}
            </ul>
        </div>
    )
}