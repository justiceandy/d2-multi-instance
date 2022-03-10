import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { Process } from '@d2r/level-db/types';


/**
 * {@link create} Creates a new Game Process Record
 * @param processId Windows Process ID of Game 
 * @param status Status of Process ('launching' | 'que' | 'ingame')
 * @param squadType Squad Member Type ('leader' | 'follower')
 * @param account D2RMA Account ID associated with Process
 * @returns Promise<Process>
 */
export const create = async (attributes:Process) => {
    const { ProcessDB } = await Store({});
    const id = uuidv4();
    const payload : Process  = Object.assign({ id }, attributes);
    const created= await ProcessDB.put(id, payload);

    return payload;
}
