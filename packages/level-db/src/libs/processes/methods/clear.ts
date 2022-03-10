import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Processes
 * @returns boolean
 */
export const clear = async () => {
    const { ProcessDB } = await Store();
    await ProcessDB.clear();
    return true;
}
 