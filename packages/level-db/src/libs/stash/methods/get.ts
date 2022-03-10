import { list } from './list';
import { Store } from '@d2r/level-db'
import { StashItem } from '@d2r/level-db/types';

export type getItemArgs = {
    filter: 'id',
    filterValue: string,
    multiple?: boolean,
}
/**
 * {@link get} Get Stash Items(s) by Filter Criteria.
 * {@link getArgs} Params:
 * @param filter id
 * @param filterValue Attribute Value in Type to Filter On
 * @param multiple Boolean to return either array of all accounts or first account found.
 * @returns StashItem || StashItem[]
 */
export const get = async ({ filter, filterValue, multiple = false }:getItemArgs) => {
    const items = await list();
    const { StashDB } = await Store({});
    let filtered = [];
    switch (filter){
        case 'id':{
            const item = await StashDB.get(filterValue);
            return item;
        }
        default: {
            filtered = items.filter(({ itemId }:Partial<StashItem>) => itemId === filterValue);
            break;
         }
    }
    return multiple ? filtered : filtered.pop();
}
 

