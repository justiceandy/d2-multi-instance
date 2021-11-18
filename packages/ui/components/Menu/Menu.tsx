import './Menu.css';
import { Link } from 'react-router-dom';
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
            <li>Support</li>
            <li>v1.0</li>
          </ul>
        </div>
      </div>
    );
  };