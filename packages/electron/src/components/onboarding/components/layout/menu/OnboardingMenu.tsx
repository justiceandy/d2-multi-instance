
import { Link } from 'react-router-dom';
import './OnboardingMenu.css';
import Icon from '@mdi/react';
import {  
    mdiChevronRight 
} from '@mdi/js';
export default function OnboardingMenu ({ steps, step, navigate }:any) {


    return (
        <div className="OnboardingMenu">
           <ul>
               { steps.map(({ label, state, id }:any) => {
                   return (
                       <Link to="#" key={`menuA${id}`} onClick={(e) => navigate({ event: e, step: state })} className={state === step.state ? `nav-link active` : `nav-link`}>
                           <li key={`menuItem${id}`}>
                                <span>Step {id}</span>
                                <label>{label}</label>

                                { label !== 'Finalize' ?
                                    <Icon className="OnboardMenuChev" path={mdiChevronRight}
                                    size={1} />
                                : null}
                  
                           </li>
                        </Link>
                   )
               })}
           </ul>
        </div>
    );
  };