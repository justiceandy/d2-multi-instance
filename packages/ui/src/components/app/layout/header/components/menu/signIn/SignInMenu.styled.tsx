import styled from "@emotion/styled";
import Icon from "@mdi/react";
import Button from '@mui/material/Button';

export const Container = styled.div`
height: 50px;
`

export const GuestIcon = styled(Icon)`

`
export const GuestMenuButton = styled(Button)`
    display: flex;
    flex-direction: row;
    align-content: space-around;
    justify-content: center;
    align-items: flex-start;
    color: #7c7c7c;
    flex-wrap: wrap;
    font-family: system-ui;

    label {
        font-size: 0.8em;
        padding-left: 5px;
        padding-top: 2px;
    }
`
