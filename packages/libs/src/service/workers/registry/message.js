import registry from "../../../registry/battle-net";

export default async function ({ que }) {
    const keys = await registry.get();
    const webTokenKeyName = `${registry.keys.osi.type}\\${registry.keys.osi.name.replaceAll('/', '\\')}`;
    // Async Q to prevent multiple executions
    // The Registry watcher gets events for all subkey values :pepehands:
    const asyncStore = async () => {
        return await registry.store({ 
            keys: keys[webTokenKeyName].values,
        })
    };
    const stored = que.enqueue(asyncStore);
}