import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Profiles
 * @returns boolean
 */
export const clear = async () => {
    const { ProfileDB } = await Store();
    await ProfileDB.clear();
    return true;
}
 