import styled from '@emotion/styled'

import { FormLabelContainer } from '../labels/FormLabels.styled';
import { FormValueContainer } from '../values/FormValues.styled';

const Container = styled.div`
    display: flex;
    background: #00000085;
    align-content: stretch;
    justify-content: flex-end;
    align-items: baseline;
    flex-wrap: nowrap;
    flex-direction: row;
    height: 100vh;
    z-index: 0 !important;    
    padding-top: 7px;
    ${FormLabelContainer} {
        
    }

    ${FormValueContainer} {

    }
`

export {
    Container
}
