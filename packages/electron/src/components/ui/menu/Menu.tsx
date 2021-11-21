import './Menu.css';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiDiscord, mdiGithub, mdiConsoleLine } from '@mdi/js';

export default function Menu () {
    return (
      <div>
        <div className="Menu">
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/accounts">Accounts</Link></li>
            <li><Link to="/integrations">Integrations</Link></li>
           <li><Link to="/settings/general">Settings</Link></li>
         </ul>
        </div>
        <div className="MenuFooter">
          <ul>
            <li> 
            <Link to="/service/general">
              <Icon className="MenuIcon" path={ mdiDiscord}
                    title="Get Support on Discord"
                    size={1} />
            </Link>
            </li>
            <li>
              <Link to="/service/general">
                <Icon className="MenuIcon" path={ mdiGithub}
                      title="Project is Open Source!"
                      size={1} />
              </Link>
            </li>
            <li> 
              <Link to="/service/general">
                <Icon className="MenuIcon" path={mdiConsoleLine}
                      title="Background Service Info"
                      size={1} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };