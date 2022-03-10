import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { LaunchEvent } from '@d2r/level-db/types';


/**
 * {@link create} Create D2RMA Game Process launch event
 * 
 * {@link LaunchEvent}:
 * @param account Internal D2RMA Account Id
 * @returns Account
 */
export const create = async (attributes:LaunchEvent) => {
    const { LaunchEventDB } = await Store({});
    const id = uuidv4();
    const payload = Object.assign({ id }, attributes);
    const created = await LaunchEventDB.put(id, payload);
    return created;
}
