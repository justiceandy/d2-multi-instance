

import { d2process } from '@d2r/libs';

export default function ProcessDataHandler({ ipcMain }:any) {
    ipcMain.handle('processes/get', async () => {
        const result = await d2process.list();
        return result;
    })
    return ipcMain;
}

