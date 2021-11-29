import installExtensions from "../extensions/install";
import path from 'path';
import { app, BrowserWindow, Tray } from 'electron';
import MenuBuilder from '../menu';
import { resolveHtmlPath } from '../util';
import CreateTray from './tray';


/*
    Module Handles Creating Main Entry Window
*/
export default async function createMainWindow({ isDevelopment }:any){
    
    let mainWindow: BrowserWindow | null = null;
    let tray: Tray | null = null;

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
    
    console.log('Going to Main')  
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
  
    mainWindow.on('minimize', (event:any) => {
        event.preventDefault();
        /* @ts-expect-error */
        mainWindow.hide();
        tray = CreateTray({ mainWindow, icon: getAssetPath('icon.png')});
    });
    mainWindow.on('restore',  () => {
        /* @ts-expect-error */
        mainWindow.show();
        /* @ts-expect-error */
        tray.destroy();
    });
    mainWindow.on('closed', () => {
      mainWindow = null;
    });
    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();

    return mainWindow;
  };