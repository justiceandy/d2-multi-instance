import { LaunchEvent } from '@d2r/level-db/types';
import { list } from './list';

export type getArgs = {
    filter: 'account' ,
    filterValue: string,
    multiple?: boolean,
}

/**
 * {@link get} Get Launch Event(s) by Filter Criteria.
 * {@link getArgs} Params:
 * @param filter 'account'
 * @param filterValue Attribute Value in Type to Filter On
 * @param multiple Boolean to return either array of all events or first event found.
 * @returns LaunchEvent || LaunchEvent[]
 */
export const get = async ({ filter, filterValue, multiple = false }:getArgs) => {
    const processes = await list();
    let filtered = [];
    switch (filter){
        case 'account':{
            filtered = processes.filter(({ account }:Partial<LaunchEvent>) => account === filterValue);
            break;
        }
    }
    return multiple ? filtered : filtered.pop();
}
 

