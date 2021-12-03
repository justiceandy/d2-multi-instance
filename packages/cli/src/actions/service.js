/*
    Module Handles running the CLI as a service
        - Sets Registry/Active Window Event Hooks
        - Uses Cluster to make Hooks non blocking
*/
import cluster from 'cluster';
import service from "@d2r/libs/dist/service";
import accountStore from "@d2r/libs/dist/settings/account";
import preferenceStore from "@d2r/libs/dist/settings/preferences";

const config = {
    primary: service.primary,
    workers: {
        1: service.workers.process,
        2: service.workers.registry,
    }
};
const activeCluster = service.cluster.init();
const PreferenceStore = preferenceStore.init({});

const init = ({ config, worker }) => {
    const workerPayload = {
        state: worker.state || 'initialized',
        workerId: worker.id,
        pid: worker.process ? worker.process.pid : null,
        name: config.workers[worker.id].name,
        stop: () => {

        },
        start: config.workers[worker.id].start,
    };
    return workerPayload;
}

const executeWorkerThread = async () => {
    const { worker } = activeCluster;
    const appSettings = PreferenceStore.get();
    // Conditionally Start Workers Based on Initial App Settings
    const workerPayload = init({ config, worker });
    workerPayload.start({ config, cluster: activeCluster })
    return { workerPayload, worker, appSettings }
}

export default async (args) => {
   
  // If Primary Thread
  if(service.cluster.isMain(activeCluster)) {
        console.log(cluster)
        const primaryFork = config.primary.start({ 
            config, 
            cluster: activeCluster,
        });
        // console.log(activeCluster);
        // console.log(config);
        // Worker Forked Process
   
  }
  
  // If Worker Thread
  if(service.cluster.isWorker(activeCluster)) executeWorkerThread({ config, activeCluster })
  
  return true;

}
  
