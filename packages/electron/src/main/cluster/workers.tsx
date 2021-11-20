
const init = ({ config, worker }:any) => {
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

export {
    init
}
export default {
    init,
}