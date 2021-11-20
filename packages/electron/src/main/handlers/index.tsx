

import { settings, d2process } from '@d2r/libs';

export default function init({ ipcMain }:any) {
    ipcMain.on('ipc-example', async (event:any, arg:any) => {
        const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
        console.log(msgTemplate(arg));
        event.reply('ipc-example', msgTemplate('pong'));
    });
    ipcMain.handle('settings/get', async () => {
        const result = await settings.get();
        return result;
    })
    ipcMain.handle('settings/update', async () => {
        console.log('Putting Settings')
        return true;
    })
    ipcMain.handle('processes/get', async () => {
        const result = await d2process.list();
        return result;
    })
    ipcMain.handle('api/start', async () => {
        console.log('Starting API')
        return true;
    })
    ipcMain.handle('registry-watcher/start', async () => {
        console.log('Starting Registry')
        return true;
    })
    ipcMain.handle('process-watcher/start', async () => {
        console.log('Starting Process Watcer')
        return true;
    })
    ipcMain.handle('account/update', async () => {
        console.log('Updating Account')
        return true;
    })
    ipcMain.handle('account/create', async () => {
        console.log('Creating Account')
        return true;
    })
    ipcMain.handle('account/delete', async () => {
        console.log('Removing Account')
        return true;
    })
    return ipcMain;
}

