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
import primary from './cluster/primary';

// Initialize Clustered Process
const activeCluster = cluster.init();
const config = cluster.defaultConfig();

// Start Primary Thread
if(cluster.isMain(activeCluster)) {
  primary.start();
  config.primary.start({ config, cluster: activeCluster });
}
if(cluster.isWorker(activeCluster)) cluster.start({ config, cluster: activeCluster })
