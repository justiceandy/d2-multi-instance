/*
    Returns Utilization for a ProcessID
*/
import os from 'os';
import pidusage from 'pidusage'
import { WindowsCPU } from 'windows-cpu';

const cpu = new WindowsCPU();

const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const cpuCount = os.cpus().length

const getUtilization = async ({ pid = process.pid }) => {
    const stats = await pidusage(pid)
    let { load, found } = await cpu.findLoad(pid);
    const result = {
        memory: formatBytes(stats.memory),
        cpu: (load / cpuCount).toFixed(2),
        load,
        cores: cpuCount,
    };
    console.log(result)
    return result;
}

export {
    getUtilization,
}

export default getUtilization;