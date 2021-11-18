import './Menu.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiDiscord, mdiGithub } from '@mdi/js';

export default function Menu () {
    return (
      <div>
        <div className="Menu">
         <ul>
           <li>
             <Link to="/">
              Home
              </Link>
            </li>
           <li><Link to="/service">
              Service</Link></li>
           <li><Link to="/accounts">
              Accounts</Link></li>
            <li><Link to="/processes">
              Processes</Link></li>
           <li><Link to="/settings">
              Settings</Link></li>
         </ul>
        </div>

        <div className="MenuFooter">
          <ul>
            <li> <Icon className="MenuIcon" path={ mdiDiscord}
              title="Home"
              size={1} /></li>
            <li> <Icon className="MenuIcon" path={ mdiGithub}
              title="Home"
              size={1} /></li>
          </ul>
        </div>
      </div>
    );
  };