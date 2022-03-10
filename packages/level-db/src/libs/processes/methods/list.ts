import { Store } from '@d2r/level-db'
import { Process } from '@d2r/level-db/types';


/**
 * {@link list} all Game Processes. (These are assumed to be running). 
 * @returns Promise<Process[]>
 */
export const list = async () => {
    const { ProcessDB } = await Store({});
    const processes : Process[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of ProcessDB.iterator() ) {
       const processData : Process = value;
       processes.push(processData);
    }
    return processes
}
 