const { ipcRenderer } = require('electron');


export default function WindowPreload() {
   return {
      windowClose: async () => {
        const close = await ipcRenderer.invoke('window/close');
        return close;
      },
      windowMinimize: async () => {
        const minimized = await ipcRenderer.invoke('window/minimize');
        return minimized;
      },
    }
}
