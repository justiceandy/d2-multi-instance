import styled from '@emotion/styled'

const Container = styled.div`
    width: 100%;
    background: #1e1e1e;
    margin-top: 0px;
    height: 45px;
    font-weight: 600;
    border-bottom: 2px solid #8d8d8d;
`

const Tab = styled.li`
    float: left;
    padding-right: 15px;
    background: #1e1e1e;
    color: #a3a3a3;
    padding-left: 15px;
    border-bottom: 1px solid #0e0e0e;
    margin-right: 1px;
    width: 100%;
    padding-bottom: 13px;
    text-align: center;
    font-family: system-ui;
    padding-top: 10px;
    text-transform: uppercase;
    box-sizing: border-box;
    min-width: 140px;
`

const TabList = styled.ul`
    list-style: none;
    margin-left: 0px;
    padding-left: 0px;
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    align-content: space-around;
    flex-wrap: wrap;

    a ${Tab}  {
        flex: 1;
    }
    a.active ${Tab}, a.nav-link.active ${Tab}{
        color: #a3a3a3;
        background: #0c0c0c;
        font-weight: 500;
        border-bottom: 5px solid #0c0c0c;
        border-right: 1px solid #181818;
        text-transform: uppercase;
    }
`


export {
    Container,
    TabList,
    Tab,
}
