

import Icon from '@mdi/react'
import {
    DefaultIconButton,
    BlueButton,
    GreenButton,
    GreyButton,
 } from './IconButton.styled'
import { mdiCrownOutline } from '@mdi/js';
import { IconButton } from '@mui/material'

const InnerButtonContents = ({ label, onClick, icon }) => {
    return (
        <IconButton aria-label={label} component="span" onClick={onClick}>
            <Icon className="icon" path={icon} title={label} size={1} />
        </IconButton>
    )
}
export default function IconBtn ({
    label = 'upload', 
    color = null, 
    icon = mdiCrownOutline, 
    onClick = () => true,
}:any) {

    if(!color) return (
        <DefaultIconButton 
            children={InnerButtonContents({ label, onClick, icon })} 
            color={color} />
    );
    if(color === 'blue') return (
        <BlueButton 
            children={InnerButtonContents({ label, onClick, icon })} 
            color={color} />
    );
    if(color === 'green') return (
        <GreenButton 
            children={InnerButtonContents({ label, onClick, icon })} 
            color={color} />
    );
    if(color === 'grey') return (
        <GreyButton 
            children={InnerButtonContents({ label, onClick, icon })} 
            color={color} />
    );
  };