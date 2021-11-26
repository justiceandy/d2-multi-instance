
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import {  
    mdiGithub,
    mdiPatreon,
    mdiDiscord,
} from '@mdi/js';

import './OnboardingFooter.css';

export default function OnboardingFooter ({ previous = null, next = null }:any) {
    return (
        <div className="OnboardNavFooter">
            <span className="PreviousFooterLink">
                {previous ? <Link to={previous}>Previous</Link> : null}
            </span>
            <ul>
                <li>
                    <Link to="#">
                        <Icon className="footerIcon" path={mdiGithub}
                        title="Add to Que"
                        size={1} />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <Icon className="footerIcon" path={mdiPatreon}
                        title="Add to Que"
                        size={1} />
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <Icon className="footerIcon" path={mdiDiscord}
                        title="Add to Que"
                        size={1} />
                    </Link>
                </li>
            </ul>
                <span className="NextFooterLink">
                {next ? <Link to={next}>Next</Link> : null}
                </span>
        </div>
    );
  };