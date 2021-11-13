/*
    Module Handles Spinning Up Service Cluster
        - Worker Nodes for Blocking Processes
*/
import Queue from "queue-promise";
import cluster from 'cluster';
import { workers, primary } from "../";

export default async () => {
    const config = {
        api: {
            port: 3000,
        },
        primary,
        workers: {
            1: workers.process,
            2: workers.registry,
            3: workers.api,
        }
    }
    // que system so we dont overwrite latest tokens
    const que = new Queue({
        concurrent: 1,
        interval: 2000,
        start: true,
    });

    while (que.shouldRun) { 
        await que.dequeue(); 
    }

    cluster.on('online', async (worker) => config.workers[worker.id].online({ worker }));

    cluster.on('message', async (worker) => config.workers[worker.id].message({ que, worker }));

    // If Main Process
    if (cluster.isMaster) config.primary.start({ config, cluster })

    // If Worker Process
    if(!cluster.isMaster) config.workers[cluster.worker.id].start({ config });

    
    return true;
}
  
