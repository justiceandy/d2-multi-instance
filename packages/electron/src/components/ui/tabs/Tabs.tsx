import './Tabs.css';
import { Link } from 'react-router-dom';

export default function Tabs ({ tabs }:any) {
    return (
        <div className="ui-tab-container">
            <ul>
            {tabs.map(
                ({ url, label }:any) => <Link to={url}><li>{label}</li></Link>
            )}
            </ul>
        </div>
    );
  };