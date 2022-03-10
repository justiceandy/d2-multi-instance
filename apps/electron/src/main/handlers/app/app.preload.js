
module.exports = (ipcRenderer) => {
    return {
        goToDashboard: async () => {
            return await ipcRenderer.invoke('go/dashboard');
        },
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
        goToGithub: async () => {
            const trigger = await ipcRenderer.invoke('app/github');
            return trigger;
        },
        goToPatreon: async () => {
            const trigger = await ipcRenderer.invoke('app/patreon');
            return trigger;
        },
        goToDiscord: async () => {
            const trigger = await ipcRenderer.invoke('app/discord');
            return trigger;
        },
        onboard: async (payload) => {
            const onboardResult = await ipcRenderer.invoke('app/onboard', payload);
            return onboardResult;
        },
     }
 }
 