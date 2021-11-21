import './Header.css';
import icon from '../../../../assets/d2-logo.png';
import Icon from '@mdi/react'
import { mdiClose, mdiWindowMinimize } from '@mdi/js';

export default function Header () {
    return (
      <div>
        <div className="Header">
          <img width="100px" alt="icon" src={icon} />
          <div className="HeaderText">
            <h1>Diablo II Launcher</h1>
            <label>Multi Account Authenticator</label>
          </div>
          {/* <div className="HeaderUser">
            <label>Sign in with Discord</label>
          </div> */}
          <div className="HeaderBtns">
             <Icon className="CloseIcon" path={ mdiWindowMinimize}
               title="Home"
               size={1} />
             <Icon className="CloseIcon" path={ mdiClose}
               title="Home"
               size={1} />
          </div>
        </div>
      </div>
    );
  };