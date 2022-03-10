import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Stash Items
 * @returns boolean
 */
export const clear = async () => {
    const { StashDB } = await Store();
    await StashDB.clear();
    return true;
}
 