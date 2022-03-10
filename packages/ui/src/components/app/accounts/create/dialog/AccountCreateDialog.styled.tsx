import styled from "@emotion/styled";
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Icon from '@mdi/react';

export const Container = styled.div`

`


export const CreateDialog = styled(Dialog)`
    .MuiDialog-container {
        background: #00000014 !important;
    }

    .MuiDialog-container .MuiPaper-root {
        background-color: #131313 !important;
        border: 1px solid #050505;
        border-radius: 10px;
        border-top: 1px solid #262626;
    }
    .MuiDialogContent-root {
        padding: 20px 24px;
        background: #1a1a1a;
        border-top: 1px solid #080808;
        box-shadow: inset 0px 2px 6px 0px black;
        padding-top: 10px !important;
    }
    .MuiDialogActions-root {
        background: #101010;
        border-top: 1px solid #0000002e;
        color: white;
        text-align: center;
        flex-direction: row;
        align-items: center !important;
        -webkit-box-pack: start !important;
        justify-content: space-between !important;
        -webkit-box-align: center !important;
        align-content: flex-start;
        box-shadow: inset 0px 2px 0px 0px #121212;
        
    }
    .MuiButton-textPrimary {
        background: #131313 !important;
        color: grey !important;
    }
    .MuiDialogActions-root button {
        width: 150px;
        padding: 10px;
    }

    .dialogLabel {
        width: 25%;
        color: #8f8f8f;
        font-size: 0.9em;
        font-weight: 500;
        text-align: center;
    }
    .ui-dialog ul li .dialogValue {
        width: 70%;
    }
    input {
        padding: 5px;
        width: 285px;
    }
    h2 {
        background: #0a0a0a;
        color: #838383;
        border-top: 1px solid #070606;
        border-left: 1px solid #070606;
        border-right: 1px solid #070606;
        font-size: 1em;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
    }
`

export const DialogList = styled.ul`
    list-style: none;
    padding-left: 0px;
    padding-right: 20px;
    font-weight: 600;
`

export const DialogListItem = styled.li`
    display: flex;
    min-width: 450px;
    align-content: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
`


export const ErrorContainer = styled.div`
    color: #ababab;
    float: right;
    display: flex;
    text-align: right;
    position: absolute;
    font-size: 0.9em;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    bottom: 68px;
    flex-direction: row;
    overflow: hidden;
    height: 31px;
    box-sizing: border-box;
    clear: both;
    right: 68px;
    width: 321px;
`
export const ErrorList = styled.ul`
    width: 400px;
    align-content: stretch;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-top: -2px;
    padding-right: 0px !important;
`

export const ErrorItem = styled.li`
    min-width: auto !important;
    height: 30px;
    box-sizing: border-box;
    padding-top: 6px;
    align-items: center !important;
    color: #444444;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
`

export const DialogInput = styled.input`
    font-weight: normal !important;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #060606c7;
    color: #d3d3d3;
    font-family: system-ui;
    font-size: 1em;
    background: #232323;
    border-radius: 4px;
    padding: 10px;
`

export const DialogInputContainer = styled.div`
    width: 70%;
`
export const DialogLabelContainer = styled.div`
    width: 25%;
    color: #8f8f8f;
    font-size: 0.9em;
    font-weight: 500;
    text-align: center;
`

export const GameFolderLabelContainer = styled(DialogLabelContainer)`
    padding-top: 9px;
`

export const NameIcon = styled(Icon)`
    float: right;
    position: absolute;
    margin-right: 25px;
    margin-top: 7px;
    right: 0;
`

export const ValidNameIcon = styled(NameIcon)`
    color: #939393;
`

export const InValidNameIcon = styled(NameIcon)`
    color: #810000;
`

export const GameFolderButton = styled(Button)`
    text-decoration: none;
    width: 90%;
    float: left;
    margin-top: 5px;
    border: 1px solid#0a0a0a;
    box-sizing: border-box;
    box-shadow: 0px 1px 0px 0px #0000004f;
    border-radius: 4px;
    :hover {
        background: #242424;
        border: 1px solid #0e0e0e;
    }
    label {
        width: 80%;
        float: left;
        font-size: 0.8em;
        cursor: pointer;
        color: #c1c1c1;
        padding: 7px;
        font-weight: normal;
    }
    .idleFolderIcon {
        color: #c1c1c1;
        float: left;
        margin-top: 4px;
        margin-left: 7px;
        margin-right: 2px;
    }
`

export const ValidFolderContainer = styled.div`
    float: left;
    width: 100%;
    font-size: 0.9em;
    color: #e7e7e7;
    padding-top: 10px;
    text-align: left;
`

export const ValidFolderIcon = styled(Icon)`
    position: absolute;
    right: 26px;
    top: 155px;
    color: #939393;
`
export const DisabledFolderInput = styled.input`
    color: grey !important;
    text-overflow: ellipsis;
`

export const HiddenInput = styled.input`
    display:none;
`

export const ValidFolderButton = styled(Button)`
    text-decoration: none;
    width: 80%;
    float: left;
    margin-top: 5px;

    div {
        border: 1px solid #101010;
        float: left;
        width: 100%;
        text-align: center;
        padding: 10px;
        border-radius: 6px;
    }
    label {
        width: 80%;
        float: left;
        font-size: 0.8em;
        cursor: pointer;
        color: #c1c1c1;
    }
`


export const IconOnlyButton = styled(Button)`
  
`

export const AddAccountIcon = styled(Icon)`
    padding: 5px;
    border-radius: 5px;
    float: right;
    color: #7c7c7c;
    margin-right: 6px;

`
export const IconButton = styled(Button)`
  
`
