import installExtensions from "../extensions/install";
import path from 'path';
import { app, BrowserWindow, Tray } from 'electron';
import MenuBuilder from '../menu';
import { resolveHtmlPath } from '../util';
import CreateTray from './tray';


/*
    Module Handles Creating Onboarding Window
*/
export default async function createOnboardingWindow({ isDevelopment }:any){
    
    let onboardingWindow: BrowserWindow | null = null;
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
    

    onboardingWindow = new BrowserWindow({
      show: false,
      autoHideMenuBar: true,
      frame: false,
      icon: getAssetPath('icon.png'),
      webPreferences: {
        preload: path.join(__dirname, '../preload.js'),
      },
      ...conditionalWindowProps,
    });
    
    onboardingWindow.loadURL(resolveHtmlPath('index.html'));
  
    onboardingWindow.on('ready-to-show', () => {
      if (!onboardingWindow) {
        throw new Error('"mainWindow" is not defined');
      }
      if (process.env.START_MINIMIZED) {
        onboardingWindow.minimize();
      } else {
        onboardingWindow.show();
        
      }
    });

    onboardingWindow.on('minimize', (event:any) => {
        event.preventDefault();
        /* @ts-expect-error */
        mainWindow.hide();
        tray = CreateTray({ onboardingWindow, icon: getAssetPath('icon.png')});
    });
    
    onboardingWindow.on('restore',  () => {
        /* @ts-expect-error */
        mainWindow.show();
        /* @ts-expect-error */
        tray.destroy();
    });
    onboardingWindow.on('closed', () => {
        onboardingWindow = null;
    });
  
    const menuBuilder = new MenuBuilder(onboardingWindow);
    menuBuilder.buildMenu();

    return onboardingWindow;
  };