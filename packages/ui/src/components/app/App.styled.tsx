

import styled from '@emotion/styled'
import { Container as Header} from './layout/header/Header.styled';

const Container = styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    bottom: 0px;
    position: absolute;
    width: 100%;

    ${Header} {
        z-index: 4;
    }
`

const PageContainer = styled.div`
    display: flex;
`

const Content = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0px;
    padding-top: 105px;
    box-sizing: border-box;
    padding-left: 152px;
    z-index: 1;
    height: 100%;
`
const MenuContainer = styled.div`
    position: absolute;
    bottom: 0px;
    padding-top: 105px;
    box-sizing: border-box;
    height: 100%;
    top: 0px;
    z-index: 3;
    background: #101010;
    background: #141414;
    border-top: 1px solid #0e0e0e;
    border-right: 1px solid #0e0e0e;
`
export {
    Container,
    PageContainer,
    Content,
    MenuContainer,
}
