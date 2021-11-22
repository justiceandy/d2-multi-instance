

import { settings } from '@d2r/libs';

export default function SettingsDataHandler({ ipcMain }:any) {
    ipcMain.handle('settings/get', async () => {
        const result = await settings.get();
        return result;
    })
    ipcMain.handle('settings/update', async () => {
        console.log('Putting Settings')
        return true;
    })
    return ipcMain;
}

