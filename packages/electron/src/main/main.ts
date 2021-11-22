/* eslint global-require: off, no-console: off, promise/always-return: off */
/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import cluster from '@d2r/libs/dist/service/cluster';
import { settings } from '@d2r/libs';
import primary from './cluster/primary';
import workers from './cluster/workers';
import { ipcMain } from 'electron';
import workerIpcHandler from './handlers/worker/worker.handler';

// Initialize Process Cluster
const activeCluster = cluster.init();
const config = cluster.defaultConfig();

// Main Process
const executeMainThread = async () => {
  // Start Main Window
  const mainWindow = primary.start();
  //const appSettings = await settings.get();
  
  // Start the Process Fork
  const primaryFork = await config.primary.start({ 
    config, 
    cluster: activeCluster 
  });
  // Construct Worker Data Payload for Handler
  const workerPayloads = Object.keys(config.workers).map(
    id => workers.init({ config, worker: { id } })
  );
  // Create IPC Handles with Context
  workerIpcHandler({ ipcMain, workers: workerPayloads });
  return { mainWindow, primaryFork, workerPayloads }
}

// Worker Forked Process
const executeWorkerThread = async () => {
  const { worker } = activeCluster;
  const appSettings = await settings.get();
  // Conditionally Start Workers Based on Initial App Settings
  const workerPayload = workers.init({ config, worker });
  workerPayload.start({ config, cluster: activeCluster })
  return { workerPayload, worker, appSettings }
}

// If Primary Thread
if(cluster.isMain(activeCluster)) executeMainThread()

// If Worker Thread
if(cluster.isWorker(activeCluster)) executeWorkerThread()
