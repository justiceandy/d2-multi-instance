import reactDom from 'react-dom';
import App from './components/app/App';
import Onboarding from './components/app/onboarding/Onboarding';

export const render = async () => {
    /*@ts-expect-error */
    const getWindowFrontEnd = window ? await window.electron.ipcRenderer.getWindowFrontEnd() : null;
    /*@ts-expect-error */
    const settings = window ? await window.electron.ipcRenderer.getSettings() : null;
    // Different Base Components depending on Window
    if(getWindowFrontEnd === 'main') reactDom.render(<App settings={settings} />, document.getElementById('root'));
    if(getWindowFrontEnd === 'onboarding') reactDom.render(<Onboarding settings={settings} />, document.getElementById('root'));
}

export default render;
