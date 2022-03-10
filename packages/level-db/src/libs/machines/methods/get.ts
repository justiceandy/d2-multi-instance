import { list } from './list';
import { Machine } from '@d2r/level-db/types';
import { Store } from '@d2r/level-db'


export type getArgs = {
    filter: 'id' | 'host',
    filterValue: string,
    multiple?: boolean,
}

/**
 * {@link get} Get Machines(s) by Filter Criteria.
 * {@link getArgs} Params:
 * @param filter Attribute Type to filter on 
 * @param filterValue Attribute Value in Type to Filter On
 * @param multiple Boolean to return either array of all accounts or first account found.
 * @returns Machine || Machine[]
 */
export const get = async ({ filter, filterValue, multiple = false }:getArgs) => {
    const { MachineDB } = await Store({});
    const machines = await list();
    let filtered = [];
    switch (filter){
        case 'id':{
            const item = await MachineDB.get(filterValue);
            return item;
        }
        case 'host':{
            filtered = machines.filter(({ host }:Partial<Machine>) => host === filterValue);
            break;
        }
        default: {
            filtered = machines.filter(({ id }:Partial<Machine>) => id === filterValue);
            break;
         }
    }
    return multiple ? filtered : filtered.pop();
}
 

