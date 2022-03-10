import base64 from 'base-64';
import shortHash from 'shorthash2';
import { que } from '@d2r/utils';
import { tokens } from '@d2r/level-db';
import { get } from '..'
import { osi } from './keys';
import { determineAccount } from '../libs/determineAccount';
/* @ts-expect-error */
import winreglib from 'winreglib';

export interface WatchKeyOptions {
    key: string
    DataStore: any
    CacheProvider?: any
}

export interface TokenChangeOptions {
    DataStore: any
}
const defaults = {
    key: osi.full,
    DataStore: null,
    CacheProvider: null,
}

let lastToken : string | null = null;

/**
 * {@link onTokenChanged} Function Fired when Registry Token Changes. 
 * Stores OSI Key Values in LevelDB
 * @param DataStore LevelDB Instance to store data in
 */
const onTokenChanged = async (args:TokenChangeOptions) => {
    // Current Keys
    const current = await get(osi.full);
    const { 
        WEB_TOKEN, GAME_ACCOUNT, ACCOUNT_STATE, ACCOUNT, ACCOUNT_TS,
    } = current;

    // Hash Binary Array so its easier to compare
    const compare = {
        GAME_ACCOUNT, 
        ACCOUNT_TS,
        WEB_TOKEN:  shortHash(base64.encode(WEB_TOKEN)),
        ACCOUNT_STATE: shortHash(base64.encode(ACCOUNT_STATE)),
        ACCOUNT: shortHash(base64.encode(ACCOUNT)),
    }

    // If this is a new token, add processing to que
    if(lastToken && lastToken !== compare.WEB_TOKEN || !lastToken){
        console.log('New Token Detected');
        que.add({ 
            name: 'registry', 
            promise: () => processToken({ current, compare }) 
        });
    }
    
    lastToken = compare.WEB_TOKEN;

    return true;
};

/**
 * {@link processToken} Determine Meta Data from Refresh Token
 * @param current Current Registry Values
 * @param compare Compare Hash Values
 */
const processToken = async ({ current, compare }:any) => {
    const tokenAccount = await determineAccount(compare);
    // Store Token
    await tokens.create({
        ...tokenAccount,
        raw: current,
        compare,
    });
    return true;
}

/**
 * {@link watch} Watches OSI registry key for changes
 * @param CacheProvider Optional Cache Provider
 * @param DataStore Optional Datastore for Results (Level-DB)
 */
export const watch = async (args?:WatchKeyOptions) => {
    const { key, DataStore } = Object.assign({}, defaults, args);
    const handler = winreglib.watch(`${key}`);
    handler.on('change', async (evt:any) => onTokenChanged({
        DataStore
    }));
    return handler;
}
