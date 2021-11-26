import { app} from 'electron';

export default function AppInfoHandler({ ipcMain }:any) {
    ipcMain.handle('app/paths', async () => {
        return {
            appPath: app.getAppPath(),
            installPath: app.getPath("exe"),
            desktop: app.getPath("desktop"),
        };
    })
    ipcMain.handle('app/metrics', async () => {
        return {
            metrics: app.getAppMetrics()
        }
    })
    ipcMain.handle('app/version', async () => {
        return {
            version: app.getVersion()
        }
    })
    return ipcMain;
}

