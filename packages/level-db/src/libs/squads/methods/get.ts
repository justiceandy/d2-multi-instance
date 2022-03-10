import { list } from './list';
import { Store } from '@d2r/level-db'
import { Squad } from '@d2r/level-db/types';

export type getItemArgs = {
    filter: 'id' | 'name' | 'account',
    filterValue: string,
    multiple?: boolean,
}
/**
 * {@link get} Get Squad by Filter Criteria
 * {@link getArgs} Params:
 * @param filter id
 * @param filterValue Attribute Value in Type to Filter On
 * @param multiple Boolean to return either array of all squads or first squad found.
 * @returns StashItem || StashItem[]
 */
export const get = async ({ filter, filterValue, multiple = false }:getItemArgs) => {
    const items = await list();
    const { SquadDB } = await Store({});
    let filtered : Squad[] = [];
    switch (filter){
        case 'id':{
            const item = await SquadDB.get(filterValue);
            return item;
        }
        case 'name': {
            filtered = items.filter(({ name }:Partial<Squad>) => name === filterValue);
            break;
        }
        case 'account': {
            filtered = items.filter(({ profiles = [] }:Partial<Squad>) => {
                const nested = profiles.filter(x => x.profileId === filterValue);
                return nested.length > 0;
            });
            break;
        }
    }
    return multiple ? filtered : filtered.pop();
}
 

