import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Plugins
 * @returns boolean
 */
export const clear = async () => {
    const { PreferenceDB } = await Store();
    await PreferenceDB.clear();
    return true;
}
 