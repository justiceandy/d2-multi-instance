const { ipcRenderer } = require('electron');


export default function WindowPreload() {
   return {
      workerStart: async () => {
        const close = await ipcRenderer.invoke('window/close');
        return close;
      },
      workerStatus: async () => {
        const minimized = await ipcRenderer.invoke('window/minimize');
        return minimized;
      },
      workerStop: async () => {
        const minimized = await ipcRenderer.invoke('window/minimize');
        return minimized;
      },
    }
}
