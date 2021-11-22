
export default function init({ ipcMain }:any) {
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

