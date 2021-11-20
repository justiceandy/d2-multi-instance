/*
    Module Handles Spinning Up Service Cluster
        - Worker Nodes for Blocking Processes
*/
import Queue from "queue-promise";
import cluster from 'cluster';
import { workers, primary } from "../";

const defaultConfig = () => {
    return {
        api: {
            port: 3000,
        },
        primary,
        workers: {
            1: workers.process,
            2: workers.api,
            3: workers.registry,
        }
    }
};
const start = async ({ cluster, config }) => {
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
  
    // If Worker Process
    if(!cluster.isMaster) config.workers[cluster.worker.id].start({ config });
    return cluster;
}

const isMain = (cluster) => cluster.isMaster;
const isWorker = (cluster) => !cluster.isMaster;
const init = () => cluster;
  
export {
    init,
    start,
    isMain,
    isWorker,
    defaultConfig,
}
export default {
    init,
    start,
    isMain,
    isWorker,
    defaultConfig,
}