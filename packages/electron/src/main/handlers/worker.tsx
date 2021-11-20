

const init = ({ ipcMain, workers }:any) => {
    console.log(workers);




    // ipcMain.handle(`worker/${name}/stop`, async () => {
    //     console.log('Stopping Worker', workerId);
    //     return true;
    // })
    // ipcMain.handle(`worker/${name}/start`, async () => {
    //     console.log('Stopping Worker', workerId);
    //     return true;
    // })
    // ipcMain.handle(`worker/${name}/status`, async () => {
    //     console.log('Worker Status', workerId);
    //     return true;
    // })
    return ipcMain;
}

export {
    init,
}

export default {
    init,
}