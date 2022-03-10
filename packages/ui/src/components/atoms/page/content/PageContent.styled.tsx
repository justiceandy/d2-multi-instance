import styled from '@emotion/styled'
import diabloLogo from './assets/diablo.jpg';


const ContentContainer = styled.div`
   background: inherit;
   width: 100%;
   height: 100%;
`

const Page = styled.div`
    font-family: system-ui;
    float: left;
    margin: auto;
    width: 100%;
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    background: radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
    background-color: #1a1a1a;
    background-size: 16px 16px;
    font-weight: 600;
    height: 100%;
`

const FormPage = styled.div`
    margin-top: 0px;
    z-index: 1;
    display: flex;
    font-family: system-ui;
`
const OverlayPage = styled(Page)`
    margin-top: 0px;
    z-index: 1;
    font-family: system-ui;
    &:after {
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0.45;
        background-image: url(${diabloLogo});
        background-repeat: no-repeat;
        -webkit-background-position: 0;
        background-position: 0;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        border-top: 2px solid #6f23144d;
        background-position-x: center;
        background-blend-mode: hue;
        position: absolute;
        bottom: 0;
    }
    ${ContentContainer} div {
        z-index: 3;
        position: relative;
    }
`

const FormOverlayPage = styled(OverlayPage)`
    position: absolute !important;
    &:after {
        content: " ";
        display: block;
        width: 100%;
        height: 225px;
        opacity: 0.45;
        background-image: url(${diabloLogo});
        background-repeat: no-repeat;
        -webkit-background-position: 0;
        background-position: 0;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        border-top: 2px solid #6f23144d;
        background-position-x: center;
        background-blend-mode: hue;
        position: absolute;
        bottom: 0;
    }
`


export {
    FormPage,
    FormOverlayPage,
    OverlayPage,
    Page,
    ContentContainer,
}
