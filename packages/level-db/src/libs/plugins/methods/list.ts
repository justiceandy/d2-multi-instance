import { Store } from '@d2r/level-db'
import { Plugin } from '@d2r/level-db/types';

/**
 * {@link list} List all Stored Plugins
 * @returns [{@link Plugin}] 
 */
 export const list = async () => {
    const { PluginDB } = await Store({});
    const plugins : Plugin[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of PluginDB.iterator() ) {
       const pluginData : Plugin = value;
       plugins.push(pluginData);
    }
    return plugins
}
 