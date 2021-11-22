const {app, Tray, Menu } = require('electron');

export default function CreateTray({ mainWindow, icon }:any) {
    let appIcon = new Tray(icon);
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Show', click: function () {
                mainWindow.show();
            }
        },
        {
            label: 'Exit', click: function () {
                /* @ts-expect-error */
                app.isQuiting = true;
                app.quit();
            }
        }
    ]);
    appIcon.on('double-click', function () {
        mainWindow.show();
    });
    appIcon.setToolTip('D2R Multi Auth');
    appIcon.setContextMenu(contextMenu);
    return appIcon;
}
