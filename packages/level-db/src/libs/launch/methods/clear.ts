import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Launch Events
 * @returns boolean
 */
export const clear = async () => {
    const { LaunchEventDB } = await Store();
    await LaunchEventDB.clear();
    return true;
}
 