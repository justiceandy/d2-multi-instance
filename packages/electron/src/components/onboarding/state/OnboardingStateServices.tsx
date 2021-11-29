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
    save: {
        src: async (context, event) => {
            console.log('Saving Onboard Pref Payload:', context)
            const onboardResponse = await window.electron.ipcRenderer.onboard(context);
            return onboardResponse;
        },
    },
    verifyGameFolder: {
        src: async (context, event) => {
            console.log('Verifying Game Folder Loc', event)
            const paths = await window.electron.ipcRenderer.isValidGameDirectory(event);
            return {
                verified: true,
                folder: event.folder,
                displayName: event.name,
            };
        },
    },
    openGithub: {
        src: async (context, event) => {
            console.log('Calling Github')
            const trigger = await window.electron.ipcRenderer.goToGithub();
            return trigger;
        },
    },
    goToDashboard: {
        src: async (context, event) => {
            console.log('Going to Dashboard');
            const trigger = await window.electron.ipcRenderer.windowSwitch();
            return trigger;
        },
    },
    openDiscord: {
        src: async (context, event) => {
            const paths = await window.electron.ipcRenderer.goToDiscord();
            console.log(paths);
            return paths;
        },
    },
    openPatreon: {
        src: async (context, event) => {
            const paths = await window.electron.ipcRenderer.goToPatreon();
            console.log(paths);
            return paths;
        },
    },
}