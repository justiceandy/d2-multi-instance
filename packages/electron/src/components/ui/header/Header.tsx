import './Header.css';
import icon from '../../../../assets/d2-logo.png';
import Icon from '@mdi/react'
import { mdiClose, mdiWindowMinimize } from '@mdi/js';
import { Link } from 'react-router-dom';


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
export default function Header () {

    return (
      <div>
        <div className="Header">
          <img alt="icon" src={icon} />
          <div className="HeaderText">
            <h1>Diablo II Launcher</h1>
            <label>Multi Account Authenticator</label>
          </div>
          {/* <div className="HeaderUser">
            <label>Sign in with Discord</label>
          </div> */}
          <div className="HeaderBtns">
              <Link to="/home" onClick={minimizeApp}>
                <Icon path={ mdiWindowMinimize} size={1} />
              </Link>
              <Link to="/home" onClick={closeApp}>
                <Icon path={ mdiClose} size={1} />
              </Link>
          </div>

          <div className="HeaderStatus">
            <label className="rank">Early Adopter</label>
            <label className="version">Version: 1.0.0</label>
          </div>
        </div>
      </div>
    );
  };