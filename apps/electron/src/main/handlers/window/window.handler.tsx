import createMainWindow from '../../window/main';
import createOnboardingWindow from '../../window/onboarding';

export default function init({ ipcMain, currentWindow, window, isDevelopment }:any) {

    let primaryWindowObject = currentWindow;
    let expectedWindowComponent = window;

    ipcMain.handle('main/switch', async () => {
        const mainWindow = await createMainWindow({ isDevelopment })
              mainWindow.on('ready-to-show', () => mainWindow.show());
        primaryWindowObject.close();
        primaryWindowObject = mainWindow;
        expectedWindowComponent = 'main';
        return true;
    })
    ipcMain.handle('onboarding/switch', async () => {
        const mainWindow = await createOnboardingWindow({ isDevelopment })
              mainWindow.on('ready-to-show', () => mainWindow.show());
        primaryWindowObject.close();
        primaryWindowObject = mainWindow;
        expectedWindowComponent = 'onboarding';
        return true;
    })
    ipcMain.handle('window/close', () => {
        primaryWindowObject.close();
        return true;
    })
    ipcMain.handle('window/frontend', () => {
        return expectedWindowComponent;
    })
    ipcMain.handle('window/minimize', () => {
        primaryWindowObject.minimize();
        return true;
    })
    return ipcMain;
}

