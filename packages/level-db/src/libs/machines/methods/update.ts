import { Store } from '@d2r/level-db'
import { Machine } from '@d2r/level-db/types';


export type updateMachineArgs = {
    id: 'string',
    payload: Partial<Machine>,
}

/**
 * {@link update} Update an Machine Records Data
 * @param id D2RMA Internal ID
 * @param payload {@link Machine} Object containing Attributes to update 
 * @returns boolean 
 */
export const update = async ({ id, payload }:updateMachineArgs) => {
    const { MachineDB } = await Store({});
    const currentMachineData = MachineDB.get(id);
    const updated = Object.assign({}, currentMachineData, payload);
    await MachineDB.put(id, updated);
    return true;
}

