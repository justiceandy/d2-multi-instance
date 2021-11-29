import './Tabs.css';
import { NavLink, Link } from 'react-router-dom';


const createUrlTabs = ({ tabs }:any) => {
    return (
        <div className="ui-tab-container">
            <ul>
            {tabs.map(
                ({ url, label, exact = false }:any) => <NavLink 
                exact={exact}
                key={`tab-${label}`}
                className={isActive =>
                "nav-link" + (!isActive ? " unselected" : "")}
                    to={url}><li>{label}</li></NavLink>
            )}
            </ul>
        </div>
    );
}
const createStateTabs = ({ tabs, active }:any) => {
    return (
        <div className="ui-tab-container">
            <ul>
            {tabs.map(
                ({ label, notify, route }:any) => <Link 
                key={`tab-${label}`}
                className={active === route ? 'active' : 'inactive' }
                to="#" onClick={(e:any) => notify({ event: e, route })}><li>{label}</li></Link>
            )}
            </ul>
        </div>
    );
}
export default function Tabs ({ tabs, type = 'url', active }:any) {
   if(type === 'state') return createStateTabs({ tabs, active });
   return createUrlTabs({ tabs })
  };