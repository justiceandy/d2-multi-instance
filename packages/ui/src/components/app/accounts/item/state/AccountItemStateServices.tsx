// @ts-nocheck

export default () => {
    return {
        openD2: {
            src: async (context, event) => {
                const processes = await window.electron.ipcRenderer.getProcesses();
                console.log(processes);
                console.log(context)
                return processes;
            },
        },
        isStarted: {
            src: (context, event) => window.electron.ipcRenderer.getProcesses().then((data:any) => data),
        },
        waitForToken: {
            src: (context, event) => window.electron.ipcRenderer.getProcesses().then((data:any) => data),
        },
        killProcess: {
            src: (context, event) => window.electron.ipcRenderer.getProcesses().then((data:any) => data),
        },
        isKilled: {
            src: (context, event) => window.electron.ipcRenderer.getProcesses().then((data:any) => data),
        },
        storeToken: {
            src: (context, event) => window.electron.ipcRenderer.getProcesses().then((data:any) => data),
        }
    }
}