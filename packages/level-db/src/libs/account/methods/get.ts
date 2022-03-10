import { Account, AccountPlugin, BattleNetTokens } from '@d2r/level-db/types';
import { Store } from '@d2r/level-db'
import { list } from './list';
/*
    Module Supports Fetching Account based on attributes
*/
export type getArgs = {
    filter: 'id' | 'email' | 'session' | 'battleTag' | 'plugin' | 'token' | 'squad',
    filterValue: string,
    multiple?: boolean,
}

/**
 * {@link get} Get Account(s) by Filter Criteria.
 * {@link getArgs} Params:
 * @param filter Attribute Type to filter on 
 * @param filterValue Attribute Value in Type to Filter On
 * @param multiple Boolean to return either array of all accounts or first account found.
 * @returns Account || Accounts[]
 */
export const get = async ({ filter, filterValue, multiple = false }:getArgs) => {
    const { AccountDB } = await Store();
    const accounts = await list();
    let filtered = [];

    console.log('Get Account', filter, filterValue);
    // If we are searching by ID, dont loop
    if(filter === 'id'){
        const item = await AccountDB.get(filterValue);
        return item;
    }
    switch (filter){
        case 'email':{
            filtered = accounts.filter(({ email }:Partial<Account>) => email === filterValue);
            break;
        }
        case 'session':{
            filtered = accounts.filter(({ session }:Partial<Account>) => session === filterValue);
            break;
        }
        case 'battleTag':{
            filtered = accounts.filter(({ battleTag }:Partial<Account>) => battleTag === filterValue);
            break;
        }
        case 'plugin':{
            filtered = accounts.filter(({ plugins = [] }:Partial<Account>) => {
                const includedPlugin = plugins.filter(({ pluginId }:Partial<AccountPlugin>) => pluginId === filterValue);
                return includedPlugin.length > 0;
            });
            break;
        }
        case 'token':{
            filtered = accounts.filter(({ tokens = {
                ACCOUNT: null,
                ACCOUNT_STATE: null,
                WEB_TOKEN: null,
                ACCOUNT_TS: null,
            } } : Partial<Account>) => {
                const bnetTokens : BattleNetTokens = tokens;
                const { ACCOUNT, ACCOUNT_STATE, WEB_TOKEN } = bnetTokens;
                const accountMatch = ACCOUNT === filterValue;
                const stateMatch = ACCOUNT_STATE === filterValue;
                const webTokenMatch = WEB_TOKEN === filterValue;
                return accountMatch || stateMatch || webTokenMatch || false;
            })
            break;
        }
        default: {
            filtered = accounts.filter(({ id }:Partial<Account>) => id === filterValue);
            break;
         }
    }

    return multiple ? filtered : filtered.pop();
}
 

