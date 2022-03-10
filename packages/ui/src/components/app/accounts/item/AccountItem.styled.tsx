import styled from "@emotion/styled";
import Icon from '@mdi/react';
import { Button } from "@mui/material";

export const Container = styled.div`
    border: 1px solid #0e0e0e;
    font-family: system-ui;
    background: #121212;
    color: black;
    padding: 4px;
    padding-top: 4px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: rgb(0 0 0) 0px 2px 1px -1px, rgb(0 0 0) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    padding-left: 4px;
    display: flex;
    align-content: flex-start;
    width: 100%;
    padding-right: 9px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 65px;
    align-items: center;
`

export const InfoContainer = styled.div`
    float: left;
    display: flex;
    background: none;
    margin-left: 0px;
    box-sizing: border-box;
    color: #8d8d8d;
    font-size: 1.3em;
    padding-right: 5px;
    border-right: 0px;
    text-shadow: 2px 2px #0e0e0e;
    overflow: hidden;
    width: 100%;
    text-align: left;
    cursor: pointer;
    text-indent: 6px;
    padding-top: 3px;
    text-transform: capitalize;
    align-items: center;
    margin-top: 2px;
    float: left;

    span {
        margin-top: 4px;
        float: left;
    }
`

export const AccountInfoButton = styled(Button)`
    margin-top: -9px;
    height: 65px;
    margin-left: -5px;
    margin-bottom: -5px;
    min-width: 40%;
    max-width: fit-content;
`

export const NameContainer = styled.div`
    width: fit-content;
    float: left;
    max-width: 135px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100%;
    box-sizing: border-box;
    align-items: center;
`
export const ButtonContainer = styled.div`
    display: flex;
    right: 0;
    justify-content: flex-end;
    gap: 0.5em;
`
export const ActionButton = styled(Button)`
    color: white;
    height: 45px;
    width: 40px;
    
    min-width: 50px;
`
export const IconButton = styled(Icon)`
    float: left;
    padding: 8px;
    border-radius: 3px;
    margin-left: 10px;
    color: white;
    box-shadow: 1px 1px 1px 1px rgb(18 18 18 / 32%);
`

export const RefreshButton = styled(ActionButton)`
    background: #025177;
    :hover {
        background: #047bb5;
    }
`

export const TermButton = styled(ActionButton)`
    background: none;
    color: #c70001eb;
    :hover {
        background: #047bb5;
    }
`

export const LaunchButton = styled(ActionButton)`
    background: #0d7600;
    :hover {
        background: #00a53d;
    }
`

export const EditButton = styled(ActionButton)`
    background: #3a3a3a;
    :hover {
        background: #535353;
    }
`

export const KillProcessButton = styled(ActionButton)`
    background: #222222;
    color: #cdcdcd;
`

export const TokenCaptureButton = styled(ActionButton)`
    color: #8d8d8d;
    background: none;
`

export const ActiveProcessButton = styled(ActionButton)`
    color: green;
    background: none;
`

export const QueButton = styled(ActionButton)`

`

export const IconToolTip = styled.label`
    font-family: system-ui;
    padding-right: 10px;
    font-size: 0.9em;
    color: #8d8d8d;
    text-align: right;
    padding-left: 8px;
    display: flex;
    align-items: center;
    padding-bottom: 2px;
`
