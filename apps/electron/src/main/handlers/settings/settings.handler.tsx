

export default function SettingsDataHandler({ ipcMain }:any) {
    ipcMain.handle('settings/get', async () => {
        return {};
    })
    ipcMain.handle('settings/update', async () => {
        console.log('Putting Settings')
        return true;
    })
    return ipcMain;
}

