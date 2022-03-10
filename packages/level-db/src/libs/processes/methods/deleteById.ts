import { Store } from '@d2r/level-db'
import { AbstractBatch } from 'abstract-leveldown'
/**
 * {@link deleteById} Removes a Game Process Record. (ie. Process Stopped)
 * @param id D2RMA ID for Process. not PID
 * @returns Promise<Process>
 */
export const deleteById = async (id:string) => {
    const { ProcessDB } = await Store();
    const deleted = await ProcessDB.del(id);
    // Remove associations in Profiles
    return deleted;
}


/**
 * {@link deleteAllById} Removes a Game Process Record. (ie. Process Stopped)
 * @param id D2RMA ID for Process. not PID
 * @returns Promise<Process>
//  */
 export const deleteAllById = async (ids:string[]) => {
    const { ProcessDB } = await Store();

    const ops : AbstractBatch<any, any>[] = ids.map(i => ({ type: 'del', key: i }))
    
    const deleted = await ProcessDB.batch(ops)
    // Remove associations in Profiles
    return deleted;
}
