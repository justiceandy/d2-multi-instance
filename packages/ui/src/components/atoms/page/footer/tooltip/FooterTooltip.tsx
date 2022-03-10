import Icon from '@mdi/react'
import { Link } from 'react-router-dom';
import { mdiInformationOutline } from '@mdi/js';

import {
    Information,
    Container,
    InfoText,
    IconContainer,
    ActionIcons
 } from './FooterTooltip.styled';

import { TipActionIconArgs, PageFooterToolTipArgs } from './FooterTooltip.d'

const TipActionIcon = ({ icon, title, onClick }:TipActionIconArgs) => {
    return (
        <Link key={`foot-${title}`} to="#" onClick={onClick}>
            <Icon 
                className="MenuAddIcon" 
                path={icon}
                title={title}
                size={1} 
            />
        </Link>
    )
}

export default function PageFooterToolTip ({ text, icons = [] }:PageFooterToolTipArgs) {
    return (
        <Container>
            <Information>
                <IconContainer>
                    <Icon className="tip-icon" path={mdiInformationOutline} />
                </IconContainer>
                <InfoText>{text}</InfoText>
            </Information>
            <ActionIcons>
                { icons.map(
                    ({ icon, title }:TipActionIconArgs) => 
                    TipActionIcon({ icon, title })) }
            </ActionIcons>
        </Container>
    );
  };
