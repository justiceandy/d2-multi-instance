import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db'
import { Log } from '@d2r/level-db/types';

/*
    Module Saves a Log event into Database
*/
export type LogAttributes = {
    method: string,
    message: string,
    timestamp?: Date,
}
export const create = async (attributes:LogAttributes) => {
    const { LogDB } = await Store({});
    const id = uuidv4();
    const baseAttributes : Partial<Log> = {
        id,
        timestamp: new Date(),
    };
    const logData = <Log> Object.assign({}, baseAttributes, attributes);
    const created = await LogDB.put(id, logData);
    return created;
}
