

export default function ({ config, cluster }) {
    console.log(`Running in Cluster Mode: ${process.pid} is primary`);
    // Fork workers.
    for (let i = 0; i < Object.keys(config.workers).length; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}

