import { d2process, settings } from '../libs';
import find from 'find-process';
import output from './output/kill';

/*
    Module Handles Removing D2 Process Handler that prevents multiple accounts
    - "\Sessions\1\BaseNamedObjects\DiabloII Check For Other Instances"
*/
export default async function ({ silent, debug }) {
  if(!silent) output.onStart();

    const processInfo = await d2process.get();

    // IF we failed to get process info
    if(!processInfo) return null;

    const { pid, hex } = processInfo;

    if(!silent) output.info(processInfo);

    // Get Extra Info of Process we are Killing
    const kp = await find('pid', parseInt(pid));
    
    // Merge Account Data and Proc Info
    const combineAccountData = async (i) => {
      const account = await settings.account.getByFolder(i.bin.replace('\\D2R.exe', ''));
      const { bin, pid, ppid } = i;
      return { bin, pid, ppid, ...account };
    }

    const kpCombined = await Promise.all(
        kp.map(i => combineAccountData(i))
    );
    
    // Find Account for this Process Directory
    const killedProcessInfo = kpCombined.pop();

    // Attempt Interact w/ Window Title
    const titles = await d2process.setWindowTiles(killedProcessInfo.name);

    // Kill Multi Instance Check
    const killed = await d2process.killHandler({ pid, hex });

    // List Processes after Kill
    if(!silent) {
      output.onSuccess(killed)
      const { running, accounts } = await d2process.list();
      if(!silent) output.list(running, accounts);
    }

    return true;
  }