import { v4 as uuidv4 } from 'uuid';
import { Store } from '@d2r/level-db';
import { list } from './list';
import { Log } from '@d2r/level-db/types';


export type getArgs = {
    filter: 'id' | 'timestamp' | 'message' | 'method' | 'type',
    filterValue: string,
    multiple?: boolean,
}

/**
 * {@link get} Get Logs(s) by Filter Criteria.
 * {@link LogAttributes} Params:
 * @param filter Attribute Type to filter on 
 * @param filterValue Attribute Value in Type to Filter On
 * @param multiple Boolean to return either array of all logs or first log found.
 * @returns Log || Log[]
 */
export const get = async ({ filter, filterValue, multiple = false }:getArgs) => {
    const { LogDB } = await Store();
    const logs = await list();
    let filtered = [];

    // If we are searching by ID, dont loop
    if(filter === 'id'){
        const item = await LogDB.get(filterValue);
        return item;
    }
    switch (filter){
        case 'timestamp':{
            return null;
            break;
        }
        case 'message':{
            filtered = logs.filter(({ message }:Partial<Log>) => message === filterValue);
            break;
        }
        case 'method':{
            filtered = logs.filter(({ method }:Partial<Log>) => method === filterValue);
            break;
        }
        case 'type':{
            filtered = logs.filter(({ type }:Partial<Log>) => type === filterValue);
            break;
        }
    }

    return multiple ? filtered : filtered.pop();
}
