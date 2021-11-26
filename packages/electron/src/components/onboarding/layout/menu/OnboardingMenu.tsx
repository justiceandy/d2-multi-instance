
import { NavLink } from 'react-router-dom';
import './OnboardingMenu.css';

export default function OnboardingMenu (state:any) {
    console.log(state)
    return (
        <div className="OnboardingMenu">
           <ul>
               <NavLink exact={true} to="/" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                    <li>
                        <span>Step 1</span>
                        <label>Introduction</label>
                    </li>
                </NavLink>
                <NavLink to="/configuration" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                <li>
                    <span>Step 2</span>
                    <label>Configuration</label>
                </li>
                </NavLink>
                <NavLink to="/accounts" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                <li>
                    <span>Step 3</span>
                    <label>Game Accounts</label>
                </li>
                </NavLink>
                <NavLink to="/finalize" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                    <li>
                        <span>Step 4</span>
                        <label>Finalize</label>
                    </li>
                </NavLink>
           </ul>
        </div>
    );
  };