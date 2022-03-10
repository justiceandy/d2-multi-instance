import { exec } from 'child_process';

export type pid = string
export type processName = string

const byId = async (pid:pid) => {
    const terminated = await exec(`taskkill /pid ${pid} /t`);
    return terminated;
}

const byFileName = async (name:processName) => {
    const terminated = await exec(`taskkill /im ${name} /t`);
    return terminated;
}

export const terminate = { 
    byFileName,
    byId,
}
