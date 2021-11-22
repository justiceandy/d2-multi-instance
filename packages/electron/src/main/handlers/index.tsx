import AccountDataHandler from "./account/account.handler";
import ProcessDataHandler from "./process/process.handler"
import SettingsDataHandler from "./settings/settings.handler"
import WindowDataHandler from "./window/window.handler"

export default ({ ipcMain }:any) => {
    ipcMain.on('ipc-example', async (event:any, arg:any) => {
        const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
        console.log(msgTemplate(arg));
        event.reply('ipc-example', msgTemplate('pong'));
    });
    // App Data Handlers
    AccountDataHandler({ ipcMain });
    ProcessDataHandler({ ipcMain });
    SettingsDataHandler({ ipcMain });
    WindowDataHandler({ ipcMain });
}

