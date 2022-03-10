import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { Machine } from '@d2r/level-db/types';


export type machineAttributes = {
    host: string,
}

/**
 * {@link create} Create a Machine Record
 * 
 * {@link machineAttributes}:
 * @param host Host IP of Machine (Local | Ip)
 * @returns Promise<{@link Machine}>
 */
export const create = async (attributes:machineAttributes) => {
    const { MachineDB } = await Store({});
    const id = uuidv4();
    const baseAttributes : Partial<Machine> = {
        id,
        created: new Date(),
    };
    const machineData = <Machine> Object.assign({}, baseAttributes, attributes);

    await MachineDB.put(id, machineData);
    return machineData;
}
