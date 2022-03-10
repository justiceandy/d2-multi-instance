import { Store } from '@d2r/level-db'
import { Log } from '@d2r/level-db/types';

/*
    Module returns array of stored accounts
*/
export const list = async () => {
    const { LogDB } = await Store({});
    const logs : Log[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of LogDB.iterator() ) {
       const logData : Log = value;
       logs.push(logData);
    }
    return logs
}
 