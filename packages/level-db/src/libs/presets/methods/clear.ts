import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Presets
 * @returns boolean
 */
export const clear = async () => {
    const { PresetDB } = await Store();
    await PresetDB.clear();
    return true;
}
 