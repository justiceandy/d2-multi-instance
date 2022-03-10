import { Store } from '@d2r/level-db'
import { Machine } from '@d2r/level-db/types';

/**
 * {@link list} List all Machine Records
 * @returns Machine[]
 */
export const list = async () => {
    const { MachineDB } = await Store({});
    const machines : Machine[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of MachineDB.iterator() ) {
       const machineData : Machine = value;
       machines.push(machineData);
    }
    return machines
}
 