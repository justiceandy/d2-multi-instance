import { render } from 'react-dom';
import App from './App';
import Onboarding from '../components/onboarding/Onboarding';

const renderApp = async (window:any) => {
    const settings = await window.electron.ipcRenderer.getSettings();
    if(settings.onboarded) render(<App settings={settings} />, document.getElementById('root'));
    else render(<Onboarding settings={settings} />, document.getElementById('root'));
}

renderApp(window)