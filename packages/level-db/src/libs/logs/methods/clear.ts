import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Logs
 * @returns boolean
 */
export const clear = async () => {
    const { LogDB } = await Store();
    await LogDB.clear();
    return true;
}
 