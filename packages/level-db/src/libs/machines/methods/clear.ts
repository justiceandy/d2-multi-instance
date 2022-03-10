import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Machines
 * @returns boolean
 */
export const clear = async () => {
    const { MachineDB } = await Store();
    await MachineDB.clear();
    return true;
}
 