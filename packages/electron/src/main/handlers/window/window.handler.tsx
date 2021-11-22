
export default function init({ ipcMain, window }:any) {
    ipcMain.handle('window/close', () => {
        window.close();
        return true;
    })
    ipcMain.handle('window/minimize', () => {
        window.minimize();
        return true;
    })
    return ipcMain;
}

