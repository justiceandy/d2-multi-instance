

import styled from '@emotion/styled'
import tyraelBackground from './assets/tyrael.jpg';

const OverviewContainer = styled.div`
    min-height: 285px;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    background: #0e0e0ef2;
    border-bottom: 1px solid #18608347;
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    :after {
        background-image: url(static/media/src/components/app/home/components/overview/assets/tyrael.jpg);
        -webkit-background-position: center;
        background-position: center;
        background-position-y: -375px;
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        position: absolute;
        margin-top: 48px;
    }
`

const OverviewSection = styled.div`
    float: left;
    width: 50%;
    max-width: 350px;
    margin: auto;
    padding-top: 10px;
    position: relative;
    z-index: 3;
    height: 240px;
    box-sizing: border-box;
`

const OverviewItems = styled.ul`
    list-style: none;
    margin-left: 14px;
    margin-top: 3px;
    max-width: 400px;
    box-sizing: border-box;
    z-index: 1;
    position: relative;
    background: #0e0e0e42;
    padding-left: 0px;
    border-radius: 5px;
    padding-top: 5px;
    margin-bottom: 0px;
`

const OverviewItem = styled.li`
    margin-bottom: 7px;
    border-bottom: 1px dotted #bdbdbd1a;
    color: #bdbdbd;
    padding: 5px;
    font-family: system-ui;
    width: 100%;
    padding-bottom: 7px;
    box-sizing: border-box;
    padding-top: 2px;
    height: 35px;
    text-indent: 4px;
`

const StatCard = styled.div`
    background: #0e0e0ea3;
    font-family: system-ui;
    border-radius: 4px;
    border-color: #000000;
    color: #8d8d8d;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    height: 112px;
    width: 330px !important;
    text-indent: -10px;
    margin-left: 13px !important;
    padding-right: 0px;
    float: left;
    margin: auto;
    padding-top: 15px;
    position: relative;
    z-index: 3;
`;

const StatCardLabel = styled.label`
    font-size: 0.9em;
`;
const StatCardValue = styled.span`
    float: left;
    width: 100%;
    font-size: 2em;
    color: #0086c7 !important;
    text-shadow: -1px 2px 2px #000000;

    ${StatCard}:hover & {
        color: #0086c7 !important;
    }
`;
const StatCPU = styled.div`
    width: 45% !important;
    float: left;
    border-right: 1px solid #252525;
    box-sizing: border-box;
`;
const StatMem = styled.div`
    width: 55% !important;
    float: left;
`;

const Item = styled.span`
    float: right;
    font-weight: 700;
    float: right;
    margin-right: 10px;
    text-shadow: 1px 1px 5px black;

`
const DisabledItem = styled(Item)`
    color: #666666 !important;
`
const EnabledItem = styled(Item)`
    color: #008d2f !important;

`
export {
    OverviewItem,
    OverviewItems,
    OverviewSection,
    OverviewContainer,
    StatCard,
    StatCPU,
    StatMem,
    StatCardLabel,
    StatCardValue,
    DisabledItem,
    EnabledItem,
}
