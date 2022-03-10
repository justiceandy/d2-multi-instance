import styled from '@emotion/styled'

const FormValueContainer = styled.div`
    flex: 2;
    box-sizing: border-box;
    text-align: center;
    padding-top: 20px;
    padding-right: 10%;
    padding-bottom: 20px;
    display: flex;
    ul {
        list-style: none;
        margin-left: 0px;
        padding-left: 0px;
        padding-top: 0px;
        margin-top: 0px;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: stretch;
        align-content: center;
        flex-wrap: wrap;
        text-align: center;
    }
    li {
        padding-top: 2px;
        padding-bottom: 4px;
        font-family: $default-font;
        box-sizing: border-box;
        text-shadow: -2px 4px 6px black;
        width: 100%;
        height: 51px;
    }
`

const FormValueListItem = styled.li`
    padding-top: 2px;
    padding-bottom: 4px;
    font-family: $default-font;
    box-sizing: border-box;
    text-shadow: -2px 4px 6px black;
    width: 100%;
    height: 51px;
`
const FormValueActionItem = styled(FormValueListItem)`
    background: #104158d1;
    text-shadow: none !important;
    text-decoration: none;
    border-radius: 3px;
    margin-top: 20px;
    padding-top: 12px !important;
    color: white;
    text-transform: uppercase;
    a {
        text-decoration: none;
        color: inherit;
    }
`
const FormValueSelectItem = styled(FormValueListItem)`
    .ui-form-select-box-label {
        margin-top: -5px;
    }
    .ui-form-select-box {

    }
    .MuiInputLabel-root {
        color: grey !important;
    }
    .MuiInputBase-input {
        color: white !important;
    }
    .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root {
        border: 1px solid #0e0e0e !important;
    }
    .MuiOutlinedInput-root {
        height: 45px;
    }
    .MuiSvgIcon-root {
        color: #b1b1b1 !important;
    }
    .MuiPaper-root {
        margin-top: -10px;
    }
    .MuiFormControl-root {
        text-shadow: none;
        box-sizing: border-box;
        color: #0c0c0c;
        font-family: $default-font;
        font-size: 1em;
        background: #232323;
        font-weight: 700;
        border-radius: 4px;
        height: 45px;
        max-width: 265px;
        text-align: center;
    }
`
const FormValueGridItem = styled(FormValueListItem)`
    padding-top: 17px !important;
    height: auto !important;

    .MuiCheckbox-root {
        color: #b5b5b5 !important;
    }
`
const FormValueEmptyItem = styled(FormValueListItem)`
    border-radius: 3px;
    padding-top: 12px !important;
    height: 50px !important;
    margin-top: -5px;
`
const CheckboxItem = styled(FormValueListItem)`
    text-align: center;
    width: 21px;

    .MuiFormGroup-root {
        width: 30px;
    }
    
    .MuiCheckbox-root {
        color: #b5b5b5 !important;
    }
`

const FormValueInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #060606c7;
    color: #d3d3d3;
    font-size: 1em;
    background: #232323;
    font-weight: 700;
    border-radius: 4px;
    padding: 10px;
    :active, :focus {
        outline: none !important;
    }
`
const CheckboxInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
`

export {
    FormValueListItem,
    CheckboxItem,
    CheckboxInnerContainer,
    FormValueActionItem,
    FormValueEmptyItem,
    FormValueInput,
    FormValueGridItem,
    FormValueContainer,
    FormValueSelectItem,
}
