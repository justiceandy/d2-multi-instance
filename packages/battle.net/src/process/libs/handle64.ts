/*@ts-ignore-error */
import sudo from 'sudo-prompt';
import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

export const Handle64 = {
    path: path.resolve(`${__dirname}/../../../bin/handle64.exe`)
}

/* Is Handle64 Installed */
export const isInstalled = async () => {
    const existing = await fs.access(Handle64.path, constants.R_OK | constants.W_OK)
        .catch(err => err)
    const result = typeof existing === 'undefined' ? true : false;
    return result;
}

/* Install Handle64.exe */
export const install = async () => {}

/* Terminate Active Handle */
export interface TerminateHandleOptions {
    hex: string
    pid: string
    handle64Path?: string
}
export interface TerminateHandleResult {
    error: object | null
    output: string | Buffer | undefined | null
    terminated: boolean
}
export interface TerminateCallback {
    error?: Error | undefined,
    stdout?: string | Buffer | undefined,
    stderr?: string | Buffer | undefined,
}
export const terminate = async (args:TerminateHandleOptions) => {
    const { hex, pid, handle64Path } = args;
    const options = {
        name: 'D2 Instance Check',
    };
    const result : TerminateHandleResult = {
        error: null,
        output: null,
        terminated: false,
    };
    try {            
        const command = sudo.exec(
            `"${handle64Path || Handle64.path}" -c "${hex}" -y -p "${pid}" -nobanner`, options,
            (error, stdout, stderr) => {
                if (error) { 
                    result.error = {
                        stack: error,
                        message: stderr,
                    };
                };
                result.output = stdout;
                result.terminated = true;
                return result;
            }
        );
    } catch(err) {
        throw new Error('Handle64 Execution Failure [terminateHandle]');
    }
}

/*  Get Active Handle */
export interface GetActiveHandleOptions {
    processId?: string
    processName?: string
    handler?: string
    handle64Path?: string
}

export interface ActiveHandleResult {
    name: string
    pid: string
    hex: string
    handle: string
}  
export const get = async (args:GetActiveHandleOptions) => {
    const { processName, handler, handle64Path, processId } = args;

    const processLookup = processName || processId;

    if(!processLookup) return null;

    const exec = util.promisify(child_process.exec);
    try {
        const { stdout, stderr } = await exec(`"${handle64Path || Handle64.path}" -a -p "${processLookup}" "${handler}" -nobanner`);
        console.log(5, stdout);
        console.log(5, stderr);
        const [ name, pid, hex, handle ] = stdout
          .split(':')
          .map(i => i.replace("Event", "")
          .replace("pid", "")
          .replace("type", "")
          .replace(/\s/g, "")
          .replace("<Unknown>", ""));
        
          console.log(4, name, pid, hex, handle)
        return <ActiveHandleResult> { name, pid, hex, handle }
    } catch (e) {
        throw new Error('Handle64 Execution Error. [getActiveHandle]')
    }

}
