import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Container = styled.div`
    background: black;
    display: flex;
    align-content: flex-start;
    z-index: 2;
    position: relative;
    --stone-bg: url(https://images.blz-contentstack.com/v3/assets/blt45749e0fed8aa592/bltaac1c234002cf91b/601441486506885fe6215eca/site-bg-xs.jpg);
    margin: 0;
    background-color: black;
    background-image: radial-gradient(circle farthest-corner at 50% calc(50% - 200px), rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 90%, black 100%), var(--stone-bg);
    overflow-x: hidden;
    --row-gap: var(--size-600);
    -webkit-app-region: drag;
    height: 106px;
    overflow: hidden;
    /* opacity: 0.85; */
    /* border-bottom: 2px solid #95601e; */
`
export const LogoImage = styled.img`
    float: left;
    margin-right: 10px;
    margin-left: -39px;
    margin-top: -35px;
    padding-bottom: 10px;
    position: absolute;
    height: 245px;
    opacity: 0.75;
    z-index: 1;
`

export const AppNameContainer = styled.div`
    float: left;
    margin-left: 138px;
    position: relative;
    z-index: 3;
`
export const AppName = styled.h1`
    float: left;
    margin-top: 22px;
    margin-left: 25px;
    margin-bottom: 0px;
    color: #bdbdbd;
    font-size: 2.2em;
    text-shadow: 2px 2px #0e0e0e;
`
export const AppNameSubText = styled.label`
    float: left;
    clear: left;
    margin-left: 54px;
    color: #d89a36;
    margin-top: 4px;
`

export const BtnContainer = styled.div`
    position: fixed;
    -webkit-app-region: no-drag;
    right: 0px;
    margin-top: 3px;
    color: #d99434;
    width: 106px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    a {
        -webkit-app-region: no-drag;
        box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
        color: inherit;
        margin-left: 5px;
     }
     a:hover {
        color: white;
    }
`

export const UserContainer = styled.div`
position: absolute;
right: 0;
top: 31px;
font-family: system-ui;
font-size: 0.9em;
padding: 9px;
padding-top: 0px;
height: 53px;
box-sizing: border-box;
width: 200px;
border-right: 0px;
padding-right: 5px;
padding-left: 0px;
text-align: right;
display: flex;
align-items: stretch;
justify-content: flex-end;
`

export const Rank = styled.label`
    margin: auto;
    float: left;
    width: 105px;
    background: #060606;
    padding: 3px;
    border-radius: 3px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    font-weight: 700;
    opacity: 0.5;
`



export const Version = styled.label`
    float: left;
    clear: both;
    width: 105px;
    color: #626262eb;
    font-weight: 700;
    margin-top: 3px;
`

export const WindowButton = styled(Button)`
    color: #7c7c7c;
    padding: 0px;
    width: 35px;
    min-width: 35px;
    padding-top: 2px;
    display: inherit;
    box-sizing: border-box;
`
