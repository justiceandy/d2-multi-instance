import { Token } from '@d2r/level-db/types';
import { Store } from '@d2r/level-db'
import { list } from './list';
/*
    Module Supports Fetching Account based on attributes
*/
export type getArgs = {
    filter: 'id' | 'processId' | 'account' | 'web_token' | 'account_timestamp' ,
    filterValue: string,
    multiple?: boolean,
}
export const get = async ({ filter, filterValue, multiple = false }:getArgs) => {
    const { TokenDB } = await Store();
    const tokens = await list();
    let filtered : Token[] = [];

    // If we are searching by ID, dont loop
    if(filter === 'id'){
        const item = await TokenDB.get(filterValue);
        return item;
    }
    switch (filter){
        case 'processId':{
            filtered = tokens.filter(({ processId }:Partial<Token>) => processId === filterValue);
            break;
        }
        case 'account':{
            filtered = tokens.filter(({ account }:Partial<Token>) => account === filterValue);
            break;
        }
        case 'web_token':{
            filtered = tokens.filter(({ compare }:Partial<Token>) => {
                return compare?.WEB_TOKEN === filterValue
            });
            break;
        }
        case 'account_timestamp':{
            filtered = tokens.filter(({ raw }:Partial<Token>) => {
                return raw?.ACCOUNT_TS === filterValue
            });
            break;
        }
    }

    return multiple ? filtered : filtered.pop();
}
 

