import find from 'find-process';
import settings from '../settings';
import cache from './cache';

/*
    Returns running D2 Processes and their folder association in accounts.json
*/

// cache for poller

export default async function() {
    const d2Processes = await find('name', 'D2R.exe');
    const existing = await cache.get();
   
    const combineAccountData = async (i) => {
        const account = await settings.account.getByFolder(i.bin.replace('\\D2R.exe', ''));
        const { bin, pid, ppid } = i;
        return { bin, pid, ppid, ...account, ...existing[pid] };
    }

    const running = await Promise.all(
        d2Processes.map(i => combineAccountData(i))
    );

    const newProcesses = running
        .filter(({ pid }) => !existing[pid])

    const missingProcesses = Object.keys(existing)
        .filter(i => !running.filter(({ pid }) => i).length)

    // Add this executions
    running.map(i => existing[i.pid] = i);
    
    const payload = { 
        running,  
        status: {
            missing: missingProcesses.map(i => existing[i]),
            new: newProcesses,
        }
    };

    // Remove Missing
    missingProcesses.map(i => delete existing[i]);

    cache.update(existing);

    return payload;
}