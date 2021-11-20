import installExtensions from "../extensions/install";
import path from 'path';
import { app, BrowserWindow } from 'electron';
import MenuBuilder from '../menu';
import { resolveHtmlPath } from '../util';
import { autoUpdater } from 'electron-updater';
import windowHandlers from '../handlers/window';
import log from 'electron-log';

class AppUpdater {
    constructor() {
      log.transports.file.level = 'info';
      autoUpdater.logger = log;
      autoUpdater.checkForUpdatesAndNotify();
    }
}
/*
    Module Handles Creating Main Window
*/
export default async function createMainWindow({ isDevelopment, ipcMain }:any){
    
    let mainWindow: BrowserWindow | null = null;

    if (isDevelopment) {
      await installExtensions();
    }
  
    const RESOURCES_PATH = app.isPackaged
      ? path.join(process.resourcesPath, 'assets')
      : path.join(__dirname, '../../../assets');
  
    const getAssetPath = (...paths: string[]): string => {
      return path.join(RESOURCES_PATH, ...paths);
    };
  
    const conditionalWindowProps = isDevelopment ?
      { width: 1024, height: 728 }
      :
      { height: 728,
        maxHeight: 728,
        width: 1024,
        maxWidth: 1024,
      };
    

    mainWindow = new BrowserWindow({
      show: false,
      autoHideMenuBar: true,
      frame: false,
      icon: getAssetPath('icon.png'),
      webPreferences: {
        preload: path.join(__dirname, '../preload.js'),
      },
      ...conditionalWindowProps,
    });
  
    mainWindow.loadURL(resolveHtmlPath('index.html'));
  
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
  
    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  
    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();
    
    windowHandlers({ ipcMain, window: mainWindow })

    // Open urls in the user's browser
    // mainWindow.webContents.on('new-window', (event, url) => {
    //   event.preventDefault();
    //   shell.openExternal(url);
    // });
  
    // Remove this if your app does not use auto updates
    // eslint-disable-next-line
    new AppUpdater();

    return mainWindow;
  };