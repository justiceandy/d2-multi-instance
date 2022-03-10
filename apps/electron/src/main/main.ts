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
import { settings, service } from '@d2r/libs';
import primary from './cluster/primary';
import workers from './cluster/workers';
import { ipcMain, app } from 'electron';
import workerIpcHandler from './handlers/worker/worker.handler';

// Initialize Process Cluster
const activeCluster = service.cluster.init();
const config = service.cluster.defaultConfig();
const accountStore = settings.account.init({});
const preferenceStore = settings.preferences.init({});

console.log('File Store:',
  accountStore, preferenceStore);

// Determine what window to open from Launch Args
const chooseWindow = async () => {
  // Determine if we are executing a specific window or need to onboard
  let window = 'main';
  let windowRoute = 'home'

  const appSettings = await preferenceStore.get();
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
  const appSettings = await accountStore.get();
  // Conditionally Start Workers Based on Initial App Settings
  const workerPayload = workers.init({ config, worker });
  workerPayload.start({ config, cluster: activeCluster })
  return { workerPayload, worker, appSettings }
}

// If Primary Thread
if(service.cluster.isMain(activeCluster)) {

  chooseWindow()
    .then((res:any) => executeMainThread(res))

}

// If Worker Thread
if(service.cluster.isWorker(activeCluster)) executeWorkerThread()
