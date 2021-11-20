
export default function init({ ipcMain, window }:any) {
    ipcMain.handle('window/close', () => {
        window.close();
        return true;
    })
    ipcMain.handle('window/minimize', () => {
        window.hide()
        return true;
    })
    return ipcMain;
}

