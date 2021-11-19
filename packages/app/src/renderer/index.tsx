import { render } from 'react-dom';
import App from './App';

const renderApp = async (window:any) => {
    const settings = await window.electron.ipcRenderer.getSettings();
    render(<App settings={settings} />, document.getElementById('root'));
}


renderApp(window)