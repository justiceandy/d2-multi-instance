import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Squads
 * @returns boolean
 */
export const clear = async () => {
    const { SquadDB } = await Store();
    await SquadDB.clear();
    return true;
}
 