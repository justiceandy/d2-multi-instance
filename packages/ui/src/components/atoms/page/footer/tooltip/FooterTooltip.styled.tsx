import styled from '@emotion/styled'

const Container = styled.div`
    text-align: left;
    position: absolute !important;
    left: 0px;
    width: 100%;
    bottom: 10px;
    display: flex;
    color: #adadad;
    font-size: 1em;
`
const Information = styled.div`
    display: flex;
    flex: 3;
`

const InfoText = styled.div`
    padding-left: 5px;
    font-family: system-ui;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 5px;
`
const IconContainer = styled.div`
   height: 30px;
   float:left;

    .tip-icon {
        float: left;
        margin-left: 11px;
        height: 25px;
        margin-top: 2px;
        width: 25px;
    }
`

const ActionIcons = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    a {
        color: inherit;
        margin-right: 5px;
    }
    a:hover {
        color: white;
    }
`


export {
    Information,
    Container,
    InfoText,
    IconContainer,
    ActionIcons
}
