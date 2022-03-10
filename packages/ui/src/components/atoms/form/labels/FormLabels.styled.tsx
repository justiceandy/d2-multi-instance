import styled from '@emotion/styled'

const FormLabelContainer = styled.div`
    flex: 1;
    box-sizing: border-box;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
`
const FormLabelList = styled.ul`
    list-style: none;
    margin-left: 0px;
    padding-left: 0px;
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: space-between;
    flex-wrap: nowrap;
    text-align: center;
    flex: 1;
    flex-direction: column;
`
const FormLabelListItem = styled.li`
    padding: 5px;
    padding-left: 0px;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 50px;
    box-sizing: border-box;
    color: #cbcbcbd1;
    padding-top: 13px;
    text-shadow: -2px 4px 6px black;
    width: 100%;
`

export {
    FormLabelList,
    FormLabelContainer,
    FormLabelListItem,
}
