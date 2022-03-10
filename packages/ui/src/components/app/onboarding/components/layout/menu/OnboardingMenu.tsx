
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

import { Container, List, Item, Step, StepLabel } from './OnboardingMenu.styled';

export default function OnboardingMenu ({ steps, active, navigate }:any) {
    return (
        <Container>
           <List>
            { steps.map(({ label, state, id }:any) => (
                <Link to="#" 
                    key={`menuA${id}`} 
                    onClick={(event) => navigate({ event, step: state })} 
                    className={state === active ? `active` : ``}>
                        <Item key={`menuItem${id}`}>
                            <Step>Step {id}</Step>
                            <StepLabel>{label}</StepLabel>
                            { label !== 'Finalize' ?
                                <Icon 
                                    className="MenuChev" 
                                    path={mdiChevronRight} 
                                    size={1} />
                            : null}
                        </Item>
                </Link>
            ))}
           </List>
        </Container>
    );
  };
