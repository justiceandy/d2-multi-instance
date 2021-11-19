import { d2process, settings } from '../../';
import find from 'find-process';

/*
    Module Finds Active Handler Instances and Kills them
*/
// Merge Account Data and Proc Info
const combineAccountData = async (({ bin, pid, ppid }) => {
    const account = await settings.account.getByFolder(bin.replace('\\D2R.exe', ''));
    return { bin, pid, ppid, ...account };
});

export default async function () {

    const processInfo = await d2process.get();

    // IF we failed to get process info
    if(!processInfo) return null;

    const { pid, hex } = processInfo;

    // Get Extra Info of Process we are Killing
    const kp = await find('pid', parseInt(pid));

    const kpCombined = await Promise.all(
        kp.map(i => combineAccountData(i))
    );
    
    // Find Account for this Process Directory
    const killedProcessInfo = kpCombined.pop();

    // Attempt Interact w/ Window Title
    const titles = await d2process.window.setTitle(killedProcessInfo.name);

    // Kill Multi Instance Check
    const killed = await d2process.handler.killInstance({ pid, hex });

    return true;
  }