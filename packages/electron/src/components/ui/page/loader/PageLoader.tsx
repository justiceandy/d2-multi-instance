import './PageLoader.css';
import CircularProgress from '@mui/material/CircularProgress';

export default function PageLoader ({ text }:any) {
    return (
        <div className="ui-page-loader-container">
            <div className="ui-page-loader-spin-container">
                <CircularProgress color="inherit" />
            </div>
            <span className="ui-page-loader-text">{text}</span>
        </div>
    );
  };