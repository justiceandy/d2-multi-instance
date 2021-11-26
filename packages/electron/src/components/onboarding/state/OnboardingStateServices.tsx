// @ts-nocheck

export default {
    getAppVersion: {
        src: async (context, event) => {
            const version = await window.electron.ipcRenderer.getAppVersion();
            console.log(processes);
            console.log(context)
            return version;
        },
    },
    getAppPaths: {
        src: async (context, event) => {
            const paths = await window.electron.ipcRenderer.getAppPaths();
            console.log(paths);
            return paths;
        },
    },
}