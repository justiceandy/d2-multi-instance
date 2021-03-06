import styled from '@emotion/styled'

const Container = styled.div`
    .MuiDataGrid-columnHeaderTitleContainer {

    }

    .MuiDataGrid-main {
        background: #0e0e0e66;
        color: #a9a9a9;
        text-shadow: none;
        font-weight: 500;
    }

    .MuiDataGrid-root {
        border: 0px !important;
    }

    .MuiDataGrid-columnHeaders {
        background: #0c0c0c !important;
        border: 0px !important;
        color: #8f8f8f;
        text-align: center;
    }
    .MuiDataGrid-columnHeader {

    }
    .MuiDataGrid-columnHeaderTitle {

    }

    .MuiDataGrid-cell {
        border-bottom: 1px solid #1e1e1e !important;
    }

    .MuiDataGrid-footerContainer {
        display: none !important;
    }

    .MuiDataGrid-menuIcon {
        display: none !important;
    }

    .ui-grid-centered {
        text-align: center !important;
    }
    .ui-grid-row {
        background: #6060601f;
    }
    .ui-grid-item {
        font-size: 0.95em;
    }

    .MuiDataGrid-virtualScroller {

    }

    ::-webkit-scrollbar {
        width: 15px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: #0e0e0e;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #1e1e1e;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`
export {
    Container,
}
