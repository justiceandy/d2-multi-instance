import { list } from "./list";
import { disableActiveHandle } from "./disableActiveHandle";
import { processes, launchEvents, account } from '@d2r/level-db';
import { window } from '@d2r/utils';

/*
    Module Scans for D2R Processes
*/
const scan = async () => {
    const running = await list();
    const stored = await processes.list();
    const launched = await launchEvents.list();

    // Find Procs that are running but not stored in local db
    const missingInStored = running.filter(i =>
        stored.filter(x => x.processId === i.pid).length === 0
    )
    
    // Find Procs that are no longer running
    const missingInRunning = stored.filter(i =>
        running.filter(x => x.pid === i.processId).length === 0
    )
    
    // If we have unstored processes
    if(missingInStored.length){

        const missing = missingInStored[0];
        const lastLaunched = launched[0];

        // Store
        const stored = await processes.create({
            processId: missing.pid,
            account: lastLaunched.account,
            created: new Date(),
            refresh: new Date(),
        });

        // Remove Handle
        // This may fail if Launcher modifies handle, thats ok
        // failure means we already removed handle
        // const removed = await disableActiveHandle()
        //     .catch(err => err);

        // // Rename Process
        // const renamed = await window.setTitle({
        //     from: 'Diablo II: Resurrected',
        //     to: lastLaunched.account,
        // }).catch(err => err)

        // Update Meta Data
        console.log('D2R Process Detected', lastLaunched.account);
    }

    if(missingInRunning.length){
        const removed = await processes.deleteAllById(
            missingInRunning.map(i => i.id)
        );
    }

    console.log('Watcher Running', running)
    return true;
}   

export interface WatchProcessOptions {
    timer: number;
}

const defaults = {
    timer: 5000,
}
export const watch = async (args?:WatchProcessOptions) => {
    const { timer } = Object.assign({}, defaults, args);
    return setInterval(scan, timer)
}
