// @ts-nocheck

import {
    create,
    isValidGameDirectory,
    remove,
    update,
} from './handles';

export default function AccountDataHandler({ ipcMain }:any) {

    ipcMain.handle('account/update', 
        async (event, args) => update(args))

    ipcMain.handle('account/create', 
        async (event, args) => create(args))

    ipcMain.handle('account/delete', 
        async (event, args) => remove(args))

    ipcMain.handle('account/isValidGameDirectory', 
        async (event, args) => isValidGameDirectory(args))
        
    return ipcMain;
}

