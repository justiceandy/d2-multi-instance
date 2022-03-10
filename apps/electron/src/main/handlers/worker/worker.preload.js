

module.exports = (ipcRenderer) => {
   return {
      workerStart: async () => {
        const close = 'true'
        return close;
      },
      workerStatus: async () => {
        const minimized = 'true';
        return minimized;
      },
      workerStop: async () => {
        const minimized = 'false';
        return minimized;
      },
    }
}
