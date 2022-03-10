// @ts-nocheck

export default {
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
}
