
import Icon from '@mdi/react';
import {  
    mdiGithub,
    mdiPatreon,
    mdiDiscord,
} from '@mdi/js';

import './OnboardingFooter.css';
import { Link } from 'react-router-dom';

export default function OnboardingFooter ({ next, step, steps, prev, submit, openGithub, openPatreon, openDiscord }:any) {

    /* @ts-expect-error */
    const nextStep = step ? steps.filter(i => i.id === step.id + 1).pop() : null;
     /* @ts-expect-error */
    const prevStep = step ? steps.filter(i => i.id === step.id - 1).pop() : null;
        
    const nextLink = () => {
        return nextStep ? <Link to="#" onClick={next}>Next</Link> : <Link to="#" onClick={(e) => submit({ event: e })}>Finish</Link>;
    }
    const prevLink = () => {
        return prevStep  ? <Link to="#" onClick={prev}>Previous</Link> : null;
    }
  
    return (
        <div className="OnboardNavFooter">
            <span className="PreviousFooterLink">
               {step ? prevLink() : null}
            </span>
            <ul>
                <li>
                  <Link to="#" onClick={(e:any) => openGithub({ event: e })}>
                        <Icon className="footerIcon" path={mdiGithub}
                        title="View the Project on Github"
                        size={1} />
                    </Link>
                </li>
                <li>
                    <Link to="#" onClick={(e:any) => openPatreon({ event: e })}>
                        <Icon className="footerIcon" path={mdiPatreon}
                        title="Support this project on Patreon!"
                        size={1} />
                   </Link>
                </li>
                <li>
                    <Link to="#" onClick={(e:any) => openDiscord({ event: e })}>
                        <Icon className="footerIcon" path={mdiDiscord}
                        title="Join the Discord!"
                        size={1} />
                    </Link>
                </li>
            </ul>
                <span className="NextFooterLink">
                {step ? nextLink() : null}
                </span>
        </div>
    );
  };