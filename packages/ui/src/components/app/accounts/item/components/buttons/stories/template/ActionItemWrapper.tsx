import React from 'react';
import { MemoryRouter as Router, Link } from 'react-router-dom';
import { accountOrderIcon } from '../../../icons/ItemIcons';


import {
  Container,
  InfoContainer,
  NameContainer,
  AccountInfoButton,
} from './../../../../AccountItem.styled';

const template = (args) => {
  return (
    <Router>
    <Container>
      <AccountInfoButton>
            <InfoContainer>
                {accountOrderIcon('0')}
                <NameContainer>
                  <span>Example</span>
                </NameContainer>
            </InfoContainer>
        </AccountInfoButton>
        { args.children }
    </Container>
    </Router>
  )
};

export default template;
