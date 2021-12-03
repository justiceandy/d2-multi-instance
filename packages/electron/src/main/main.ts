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
import { ipcMain, app } from 'electron';
import workerIpcHandler from './handlers/worker/worker.handler';
import { accounts, preferences } from './store';

// Initialize Process Cluster
const activeCluster = cluster.init();
const config = cluster.defaultConfig();
const accountStore = accounts.init();
const preferenceStore = preferences.init();

console.log('File Store:',
  accountStore.path, preferenceStore.path);

// Determine what window to open from Launch Args
const chooseWindow = async () => {
  // Determine if we are executing a specific window or need to onboard
  let window = 'main';
  let windowRoute = 'home'

  const appSettings = await settings.get();
  const shouldLaunch = app.commandLine.hasSwitch("launch");

  if(!appSettings.onboarded) {
    window = 'onboarding';
    windowRoute = 'step1'
  }

  if(shouldLaunch) {
    window = 'main'
    windowRoute = 'accounts'
  }

  return {
    settings,
    window,
    windowRoute,
  }
}

// Main Process
const executeMainThread = async ({ window, windowRoute, settings }:any) => {

  const mainWindow = primary.start({ window, windowRoute, settings });

  // If we are Creating Main Window
  if(window === 'main') {
    // Start Main Window
    // Start the Process Fork
    const primaryFork = config.primary.start({ 
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

  // If we are Creating Onboarding Window
  if(window === 'onboarding'){
    console.log('Onboarding')
  }

  if(window === 'loading'){

  }

  return null;
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
if(cluster.isMain(activeCluster)) {

  chooseWindow()
    .then((res:any) => executeMainThread(res))
  
}

// If Worker Thread
if(cluster.isWorker(activeCluster)) executeWorkerThread()
