
module.exports = (ipcRenderer) => {
    return {
        updateAccount: async () => {
            const paths = await ipcRenderer.invoke('account/update');
            return paths;
        },
        createAccount: async () => {
            const paths = await ipcRenderer.invoke('account/create');
            return paths;
        },
        deleteAccount: async () => {
            const paths = await ipcRenderer.invoke('account/delete');
            return paths;
        },
        isValidGameDirectory: async () => {
            const paths = await ipcRenderer.invoke('account/isValidGameDirectory');
            return paths;
        },
        
     }
 }
 