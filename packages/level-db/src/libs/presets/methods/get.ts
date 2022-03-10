import { list } from './list';
import { Store } from '@d2r/level-db'
import { Preset } from '@d2r/level-db/types';

export type getItemArgs = {
    filter: 'id' | 'name',
    filterValue: string,
    multiple?: boolean,
}
/**
 * {@link get} Get Preset by Filter Criteria
 * {@link getArgs} Params:
 * @param filter id | name
 * @param filterValue Attribute Value in Type to Filter On
 * @param multiple Boolean to return either array of all accounts or first account found.
 * @returns Preset
 */
export const get = async ({ filter, filterValue, multiple = false  }:getItemArgs) => {
    const items = await list();
    const { PresetDB } = await Store({});
    let filtered : Preset[] = [];

    switch (filter){
        case 'id':{
            const item : Preset = await PresetDB.get(filterValue);
            return item;
        }
        case 'name':{
            const presets = await list();
            filtered = presets.filter(i => i.name === filterValue)
        }
    }

    return multiple ? filtered : filtered.pop();
}
 

