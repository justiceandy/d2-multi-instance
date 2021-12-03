
module.exports = (ipcRenderer) => {
    return {
        getAccount: async (payload) => {
            const account = await ipcRenderer.invoke('account/get', payload);
            return account;
        },
        updateAccount: async (payload) => {
            const account = await ipcRenderer.invoke('account/update', payload);
            return paths;
        },
        createAccount: async (payload) => {
            const paths = await ipcRenderer.invoke('account/create', payload);
            return paths;
        },
        deleteAccount: async (name) => {
            const paths = await ipcRenderer.invoke('account/delete', { name });
            return paths;
        },
        isValidGameDirectory: async (dir) => {
            const paths = await ipcRenderer.invoke('account/isValidGameDirectory', { dir });
            return paths;
        },
        
     }
 }
 