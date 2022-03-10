// @ts-nocheck

export default {
    getAppVersion: {
        src: async (context, event) => {
            const version = await window.electron.ipcRenderer.getAppVersion();
            return version;
        },
    },
    getAppPaths: {
        src: async (context, event) => {
            const paths = await window.electron.ipcRenderer.getAppPaths();
            return paths;
        },
    },
    save: {
        src: async (context, event) => {

            const { 
                startMinimized = false,
                onboarded = true,
                notifications = false,
                accounts, 
                shortcutDirectory, 
                automatedLogin, 
                changeWindowTitles,
                apiEnabled,
                apiPort = 3000,
            } = context;

            const appPrefs = {
                startMinimized,
                onboarded,
                notifications,
                shortcutDirectory, 
                automatedLogin, 
                changeWindowTitles,
                api: {
                    enabled: apiEnabled,
                    port: apiPort,
                }
            };

            const accountData = accounts.map(({ folder, display }, index) => {
                return {
                    display,
                    folder,
                    main: index > 0 ? false : true,
                    order: index+1
                }
            });
           
            const onboardResponse = await window.electron.ipcRenderer.onboard({
                accounts: accountData,
                preferences: appPrefs,
            });
            return onboardResponse;
        },
    },
    verifyGameFolder: {
        src: async (context, event) => {
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
            const trigger = await window.electron.ipcRenderer.goToGithub();
            return trigger;
        },
    },
    goToDashboard: {
        src: async (context, event) => {
           const trigger = await window.electron.ipcRenderer.windowSwitch();
           return trigger;
        },
    },
    openDiscord: {
        src: async (context, event) => {
            const paths = await window.electron.ipcRenderer.goToDiscord();
            return paths;
        },
    },
    openPatreon: {
        src: async (context, event) => {
            const paths = await window.electron.ipcRenderer.goToPatreon();
            return paths;
        },
    },
}