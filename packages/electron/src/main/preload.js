const { contextBridge, ipcRenderer } = require('electron');
const windowPreload = require('./handlers/window/window.preload');
const workerPreload = require('./handlers/window/window.preload');
const settingsPreload = require('./handlers/settings/settings.preload');
const accountPreload = require('./handlers/account/account.preload');
const processPreload = require('./handlers/process/process.preload');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
    ...windowPreload(ipcRenderer),
    ...workerPreload(ipcRenderer),
    ...settingsPreload(ipcRenderer),
    ...accountPreload(ipcRenderer),
    ...processPreload(ipcRenderer),
  },
});

