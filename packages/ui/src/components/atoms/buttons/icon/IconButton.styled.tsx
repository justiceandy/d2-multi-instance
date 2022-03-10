
import styled from '@emotion/styled'

  
const DefaultIconButton = styled.div`
    border-radius: 3px;
    max-width: 50px;
    box-sizing: border-box;
    color: ${props => props.color ? props.color : 'white'};
    box-shadow: 1px 1px 1px 1px rgb(18 18 18 / 32%);

    .MuiButtonBase-root {
        color: white;
        height: 50px;
        width: 50px;
    }
`

const GreenButton = styled(DefaultIconButton)`
    background: #00a53d;
    :hover {
        background: #0d7600;
    }

    .MuiButtonBase-root {
        border-radius: 0% !important;
    }
`

const BlueButton = styled(DefaultIconButton)`
    background: #047bb5;
    :hover {
        background: #025177;
    }
    .MuiButtonBase-root {
        border-radius: 0% !important;
    }
`
const GreyButton = styled(DefaultIconButton)`
    color: #cdcdcd;
    background: #222222;

    .MuiButtonBase-root {
        border-radius: 0% !important;
    }
`

/*
color: #8d8d8d;
*/
export {
    DefaultIconButton,
    BlueButton,
    GreenButton,
    GreyButton,
}