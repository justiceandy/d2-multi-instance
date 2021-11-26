import './Menu.css';
import { Link, NavLink } from 'react-router-dom';
import Icon from '@mdi/react'
import { mdiDiscord, mdiGithub, mdiConsoleLine } from '@mdi/js';

export default function Menu () {
    return (
      <div>
        <div className="Menu">
         <ul>
            <NavLink 
              className={isActive => "menu-nav-link" + (!isActive ? " unselected" : "")} 
              exact to="/"><li>Home</li>
            </NavLink>
            <NavLink 
              className={isActive => "menu-nav-link" + (!isActive ? " unselected" : "")} 
              to="/accounts"><li>Accounts</li>
            </NavLink>
            <NavLink 
              className={isActive => "menu-nav-link" + (!isActive ? " unselected" : "")} 
              to="/integrations"><li>Integrations</li>
            </NavLink>
            <NavLink 
              className={isActive => "menu-nav-link" + (!isActive ? " unselected" : "")} 
              to="/settings"><li>Settings</li>
            </NavLink>
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