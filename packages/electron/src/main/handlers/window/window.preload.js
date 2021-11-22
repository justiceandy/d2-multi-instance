
module.exports = (ipcRenderer) => {
   return {
      windowClose: async () => {
        console.log('Closing 2')
        const close = await ipcRenderer.invoke('window/close');
        return close;
      },
      windowMinimize: async () => {
        const minimized = await ipcRenderer.invoke('window/minimize');
        return minimized;
      },
    }
}
