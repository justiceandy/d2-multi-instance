import { render } from 'react-dom';
import App from './App';
import Onboarding from '../components/onboarding/Onboarding';

const renderApp = async (window:any) => {
    const getWindowFrontEnd = await window.electron.ipcRenderer.getWindowFrontEnd();
    const settings = await window.electron.ipcRenderer.getSettings();
    // Different Base Components depending on Window
    if(getWindowFrontEnd === 'main') render(<App settings={settings} />, document.getElementById('root'));
    if(getWindowFrontEnd === 'onboarding') render(<Onboarding settings={settings} />, document.getElementById('root'));
}

renderApp(window)