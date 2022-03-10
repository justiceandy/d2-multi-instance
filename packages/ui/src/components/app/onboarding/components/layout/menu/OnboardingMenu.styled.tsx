import styled from "@emotion/styled";

export const Container = styled.div`
    list-style: none;
    display: flex;
    text-align: center;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    padding-left: 0px;
    background: #121212;
    height: 60px;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    text-align: center;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    font-size: 0.9em;
    width: 100%;
    padding-left: 0px;
    margin: auto;
    flex-wrap: wrap;
    align-items: center;
    height: 65px;

    a {
        color: inherit;
        text-decoration: none;
    }
    a.active li {
        background: #100f0e;
        color: black;
    }
    
    a.active li span {
        color: #d99434;
        font-weight: 600;
    }
    a.active li label {
        color: #d99434;
        font-weight: 600;
    }

    .MenuChev {
        position: absolute;
        margin-top: -13px;
        margin-left: 25px;
        color: #5a5a5a4f;
    }
`


export const Item = styled.li`
    font-family: system-ui;
    padding-top: 11px;
    padding-bottom: 8px;
    cursor: pointer;
    height: 65px;
    width: 175px;
    box-sizing: border-box;
`

export const Step = styled.span`
    float: left;
    width: 100%;
    color: #878787;
`

export const StepLabel = styled.label`
    cursor: pointer;
`
