// @ts-nocheck
import { app, shell } from 'electron';
import { AccountStore } from '../../store/account';
import { PreferenceStore } from '../../store/preference'
import { onboard, paths, metrics, version, discord, github, patreon } from './handles';

export default function AppInfoHandler({ ipcMain }:any) {

    ipcMain.handle('app/paths',
        async (event, args) => paths(event, args))

    ipcMain.handle('app/metrics', 
        async (event, args) => metrics(event, args))

    ipcMain.handle('app/onboard', 
        async (event, args) => onboard(args))

    ipcMain.handle('app/version', 
        async (event, args) => version(event, args))

    ipcMain.handle('app/discord', 
        async (event, args) => discord(event, args))

    ipcMain.handle('app/github', 
        async (event, args) => github(event, args))

    ipcMain.handle('app/patreon', 
        async (event, args) => patreon(event, args))
    
    return ipcMain;
}

