import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Plugins
 * @returns boolean
 */
export const clear = async () => {
    const { PluginDB } = await Store();
    await PluginDB.clear();
    return true;
}
 