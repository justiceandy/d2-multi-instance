import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { app, ipcMain } from 'electron';
import initHandlers from '../handlers';
import createMainWindow from '../window/main'

const start  = () => {
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
    .then(() => {
        initHandlers({ ipcMain });
        const mainWindow = createMainWindow({ isDevelopment, ipcMain });

        app.on('activate', () => {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (mainWindow === null) createMainWindow({ isDevelopment, ipcMain });
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