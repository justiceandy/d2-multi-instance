import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Tokens
 * @returns boolean
 */
export const clear = async () => {
    const { TokenDB } = await Store();
    await TokenDB.clear();
    return true;
}
 