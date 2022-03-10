import { handle64 } from '..';
import { processes } from '@d2r/level-db';

export interface DisableActiveArgs {
    processId?: string;
    processName?: string
    username?: string
    handler?: string
}

const defaults = {
    processName: 'D2R',
    processId: null,
    username: null,
}
/*
    Module Removes Handler in D2R Process that Checks for Multiple Instances
*/
export const disableActiveHandle = async (args?:DisableActiveArgs) => {
    const { processId, processName, username } = Object.assign({}, defaults, args);

    console.log('Found User', username)
    let handleRequest : DisableActiveArgs = {
        processId: processId,
        processName: processName,
        handler: "\\Sessions\\1\\BaseNamedObjects\\DiabloII Check For Other Instances",
    }
    if(username){
        const accountProcess = await processes.get({
            filter: 'account',
            filterValue: username,
        });
        console.log('Disable Lookup', accountProcess);
        handleRequest = {
            processId: accountProcess.processId,
            processName: processName,
            handler: "\\Sessions\\1\\BaseNamedObjects\\DiabloII Check For Other Instances",
         }
    }
    console.log(handleRequest);
    const processInfo = await handle64.get(handleRequest).catch(err => null);

    console.log('Disable2', processInfo);

    if(!processInfo) return null;
    const { pid, hex } = processInfo;
    // Kill Multi Instance Check
    const killed = await handle64.terminate({ pid, hex });

    console.log('Killed Handler', killed);
    return true;
  }
