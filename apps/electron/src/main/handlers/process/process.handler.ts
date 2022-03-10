// @ts-nocheck

import {
    diablo2
} from './handles'

export default function ProcessDataHandler({ ipcMain }:any) {

    ipcMain.handle('processes/diablo2/active', 
         async (event, args) => diablo2.active())

    return ipcMain;
}

