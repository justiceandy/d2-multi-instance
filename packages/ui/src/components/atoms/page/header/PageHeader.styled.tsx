import styled from '@emotion/styled'
import Icon from '@mdi/react'

export const Container = styled.div`
    color: inherit;
    max-height: 50px;
    box-sizing: border-box;
    width: 100%;
`
export const Header = styled.h1`
    background: #0e0e0e;
    margin-top: 0;
    border-bottom: 1px solid #000000;
    padding-left: 10px;
    font-size: 1.1em;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 700;
    margin-left: 0px;
    color: #bdbdbd;
    min-height: 44px;
    box-sizing: border-box;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    margin-bottom: 0px;
    width: 100%;
    font-family: system-ui;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: nowrap;
    flex-direction: row;
    height: 50px;
    box-sizing: border-box;
    align-items: center;
`

export const ChildComponentContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 500px;
    display: flex;
    height: 50px;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    align-items: center;
`
export const IconContainer = styled.div`
    margin-right: 25px;
    display: flex;
    flex: 1;
    max-height: 26px;
    justify-content: flex-end;
    a {
        float: right;
        margin-left: 10px;
    }
`

export const SingleItem = styled.div`
    text-indent: 5px;
    display: flex;
`
export const NestedItem = styled.div`
    text-indent: 5px;
    background: inherit;
    display: flex;
`
export const BreadcrumbLabel = styled.label`
    color: #7c7c7c;
`
export const BreadcrumbContainer = styled.div`
    background: inherit;
    display: flex;
    height: 50px;
    flex: 3;
    margin-top: 0;
    align-items: center;
    padding-bottom: 5px;
    box-sizing: border-box;
`
export const ChevronContainer = styled.div`
    background: inherit;
    margin-top: 1px;
    position: relative;
    padding-left: 3px;
    padding-right: 3px;
`

export const HeaderActionIcon = styled(Icon)`
    color: #bdbdbd;
`
export const ChevronIcon = styled(Icon)`
 
`
export const MainIcon = styled(Icon)`
    color: #7c7c7c;
    height: 30px;
    float: left;
    margin-right: 0px;
    padding-bottom: 5px;
    box-sizing: border-box;
    margin-top: 3px;
`
