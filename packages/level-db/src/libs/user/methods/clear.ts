import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all User Preferences
 * @returns boolean
 */
export const clear = async () => {
    const { UserDB } = await Store();
    await UserDB.clear();
    return true;
}
 