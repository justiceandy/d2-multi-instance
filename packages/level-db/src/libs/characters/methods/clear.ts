import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Characters
 * @returns boolean
 */
export const clear = async () => {
    const { CharacterDB } = await Store();
    await CharacterDB.clear();
    return true;
}
 