
module.exports = (ipcRenderer) => {
   return {
      windowClose: async () => {
        console.log('Closing 2')
        const close = await ipcRenderer.invoke('window/close');
        return close;
      },
      getWindowFrontEnd: async () => {
        console.log('Fetching Front End Component')
        const frontEnd = await ipcRenderer.invoke('window/frontend');
        return frontEnd;
      },
      windowSwitch: async () => {
        console.log('Switching to Main Window')
        const close = await ipcRenderer.invoke('main/switch');
        return close;
      },
      windowMinimize: async () => {
        const minimized = await ipcRenderer.invoke('window/minimize');
        return minimized;
      },
    }
}
