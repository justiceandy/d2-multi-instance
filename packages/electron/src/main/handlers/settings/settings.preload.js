
module.exports = (ipcRenderer) => {
    return {
        getSettings: async () => {
            const settings = await ipcRenderer.invoke('settings/get');
            return settings;
        },
     }
 }
 