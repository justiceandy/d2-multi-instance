import Select from 'react-select';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import './FormValues.css';


const defaultOnChanged = (e:any) => {
    console.log('Value Change', e)
};

const inputs = {
    checkbox: ({ title = '', onChange = defaultOnChanged }:any) => {
        return (
        <li className="ui-form-li-centered">
         <FormGroup>
              <FormControlLabel 
                    control={<Checkbox onChange={onChange} className="ui-form-values-input" />}
                    label={title}  
               />
        </FormGroup>
        </li>
        )
    },
    select: ({ options, onChange = defaultOnChanged, defaultValue }:any) => {
        return (
            <li>
                <Select
                    className="ui-form-values-input ui-form-values-select"
                    defaultValue={defaultValue}
                    onChange={onChange}
                    options={options}/>
            </li>
        )
    },
    text: ({ name, placeholder, onChange = defaultOnChanged, defaultValue, value }:any) => {
        return (
            <li>
                <input  className="ui-form-values-input ui-form-values-text"  
                    name={name}
                    type="text"
                    value={value}
                    defaultValue={defaultValue} 
                    placeholder={placeholder} 
                    onChange={onChange} />
            </li>
        )
    },
    password: ({ name, placeholder, onChange = defaultOnChanged, defaultValue, value }:any) => {
        return (
            <li>
                <input className="ui-form-values-input ui-form-values-password" 
                    name={name}
                    type="password"
                    value={value}
                    defaultValue={defaultValue} 
                    placeholder={placeholder} 
                    onChange={onChange} />
            </li>
        )
    },
}

export default function FormValues ({ rows = [] }) {
    return (
        <div className="ui-form-values">
            <ul>
                {rows.length ?
                    /* @ts-expect-error */
                    rows.map((i):any => inputs[i.type](i))
                : null}
            </ul>
        </div>
    )
}