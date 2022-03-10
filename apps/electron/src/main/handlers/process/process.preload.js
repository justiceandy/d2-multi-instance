
module.exports = (ipcRenderer) => {
    return {
        getProcesses: async () => {
            const processes = await ipcRenderer.invoke('processes/diablo2/active');
            return processes;
        },
     }
 }
 