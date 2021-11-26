
module.exports = (ipcRenderer) => {
    return {
        getAppPaths: async () => {
            const paths = await ipcRenderer.invoke('app/paths');
            return paths;
        },
        getAppMetrics: async () => {
            const metrics = await ipcRenderer.invoke('app/metrics');
            return metrics;
        },
        getAppVersion: async () => {
            const version = await ipcRenderer.invoke('app/version');
            return version;
        },
     }
 }
 