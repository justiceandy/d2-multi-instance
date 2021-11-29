import './FooterTooltip.css';
import Icon from '@mdi/react'
import { Link } from 'react-router-dom';
import { mdiInformationOutline } from '@mdi/js';

const tipIcon = ({ icon, title, onClick }:any) => {
    return (
        <Link key={`foot-${title}`} to="#" onClick={onClick}>
            <Icon 
                className="MenuAddIcon" 
                path={icon}
                title={title}
                size={1} 
            />
        </Link>
    )
}

export default function PageFooterToolTip ({ text, icons = [] }:any) {
    return (
        <div className="ui-page-footer-tool-tip-container">
            <div className="ui-page-footer-tool-tip">
                <div className="ui-page-footer-tip-text">
                    <Icon 
                        className="ui-page-footer-tip-icon" 
                        path={mdiInformationOutline}
                        size={1} 
                    />
                    <p>{text}</p>
                </div>
            </div>
            <div className="ui-page-footer-icons">
                {
                    icons.map(({ icon, title }:any) => tipIcon({ icon, title }))
                }
            </div>
        </div>
    );
  };