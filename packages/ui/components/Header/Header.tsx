import './Header.css';
import icon from '../../../assets/d2-logo.png';
import Icon from '@mdi/react'
import { mdiClose, mdiWindowMinimize } from '@mdi/js';

export default function Header () {
    return (
      <div>
        <div className="Header">
          <img width="100px" alt="icon" src={icon} />
          <h1>Diablo II Launcher</h1>
          <div className="HeaderUser">
            <Icon className="MenuIcon" path={ mdiWindowMinimize}
              title="Home"
              size={1} />
             <Icon className="MenuIcon" path={ mdiClose}
              title="Home"
              size={1} />
          </div>
        </div>
      </div>
    );
  };