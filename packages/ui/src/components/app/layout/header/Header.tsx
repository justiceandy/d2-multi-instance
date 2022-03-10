
import icon from './assets/d2-logo.png';
import Icon from '@mdi/react'
import { mdiClose, mdiWindowMinimize } from '@mdi/js';
import { Link } from 'react-router-dom';

import { 
  Container, 
  LogoImage, 
  AppNameContainer, 
  AppName,
  AppNameSubText, 
  BtnContainer, 
  UserContainer, 
  WindowButton, 
} from './Header.styled';

import {
  HeaderSignInMenu,
  HeaderUserMenu,
} from './components';


const minimizeApp = (event:any) => {
  event.preventDefault();
  event.stopPropagation();
  /* @ts-expect-error */
  window.electron.ipcRenderer.windowMinimize()
}
const closeApp = (event:any) => {
  event.preventDefault();
  event.stopPropagation();
  /* @ts-expect-error */
  window.electron.ipcRenderer.windowClose()
}

export default function Header ({ 
  authenticated = false,
  user = null,
  rank = 'Early Adopter', 
  version = '1.0.0'
}) {
    return (
        <Container>
          <LogoImage alt="icon" src={icon} />
          <AppNameContainer>
            <AppName>Diablo II Launcher</AppName>
            <AppNameSubText>Multi Account Authenticator</AppNameSubText>
          </AppNameContainer>
          <BtnContainer>
              <WindowButton onClick={minimizeApp}>
                <Icon path={ mdiWindowMinimize} size={1} />
              </WindowButton>
              <WindowButton onClick={closeApp}>
                <Icon path={ mdiClose} size={1} />
              </WindowButton>
          </BtnContainer>
          <UserContainer>
            { authenticated ? HeaderUserMenu() : HeaderSignInMenu() }
          </UserContainer>
        </Container>
    );
  };
