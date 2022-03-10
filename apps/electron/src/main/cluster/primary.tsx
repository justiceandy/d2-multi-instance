import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { app, ipcMain } from 'electron';
import initHandlers from '../handlers';
import createMainWindow from '../window/main'
import createOnboardingWindow from '../window/onboarding';

import windowHandlers from '../handlers/window/window.handler';

const start  = ({ window }:any) => {

    if (process.env.NODE_ENV === 'production') {
        const sourceMapSupport = require('source-map-support');
        sourceMapSupport.install();
    }
    const isDevelopment = process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';
    
    if (isDevelopment) require('electron-debug')();
    
    /**
     * Add event listeners...
     */
    app.on('window-all-closed', () => {
        // Respect the OSX convention of having the application in memory even
        // after all windows have been closed
        if (process.platform !== 'darwin') app.quit();
    });
    
    app
    .whenReady()
    .then(async () => {
        initHandlers({ ipcMain });
        const mainWindow = window === 'main'
            ? await createMainWindow({ isDevelopment })
            : await createOnboardingWindow({ isDevelopment });
        mainWindow.on('ready-to-show', () => {
            if (!mainWindow) {
            throw new Error('"mainWindow" is not defined');
            }
            if (process.env.START_MINIMIZED) {
                mainWindow.minimize();
            } else {
                mainWindow.show();
            }
        });
        windowHandlers({ ipcMain, currentWindow: mainWindow, window, isDevelopment })
        app.on('activate', async () => {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (mainWindow === null) await createMainWindow({ isDevelopment, ipcMain });
        });

        return mainWindow
    })
    .catch(console.log);
  }

  export {
    start,
}
  export default {
      start,
  }