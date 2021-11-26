import './Tabs.css';
import { NavLink } from 'react-router-dom';

export default function Tabs ({ tabs }:any) {
    return (
        <div className="ui-tab-container">
            <ul>
            {tabs.map(
                ({ url, label, exact = false }:any) => <NavLink 
                exact={exact}
                className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")}
              
                    to={url}><li>{label}</li></NavLink>
            )}
            </ul>
        </div>
    );
  };