
module.exports = (ipcRenderer) => {
    return {
        getProcesses: async () => {
            const processes = await ipcRenderer.invoke('processes/get');
            return processes;
        },
     }
 }
 