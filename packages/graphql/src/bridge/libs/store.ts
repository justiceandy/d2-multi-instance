import level from 'level';
import sublevel from 'subleveldown'
import path from 'path';
import { LevelUp } from 'levelup';
import { AbstractLevelDOWN, AbstractIterator } from "abstract-leveldown";

interface StoreArgs {
    electron?: boolean;
    databaseName?: string;
}

export type DataStore = {
    Accounts: LevelUp<AbstractLevelDOWN<any, any>, AbstractIterator<any, any>>,
    Profiles: LevelUp<AbstractLevelDOWN<any, any>, AbstractIterator<any, any>>,
    Characters: LevelUp<AbstractLevelDOWN<any, any>, AbstractIterator<any, any>>,
    Items: LevelUp<AbstractLevelDOWN<any, any>, AbstractIterator<any, any>>,
    Machines: LevelUp<AbstractLevelDOWN<any, any>, AbstractIterator<any, any>>,
    Preference:  LevelUp<AbstractLevelDOWN<any, any>, AbstractIterator<any, any>>,
    Plugins: LevelUp<AbstractLevelDOWN<any, any>, AbstractIterator<any, any>>,
}

let instance : any = null;
const dbFolder = process.env.STORE_DATA_SRC || process.env.APPDATA ||  process.env.HOME + "/.local/share";

export const Store = async ({ electron = false, databaseName = 'default' }:StoreArgs) => {

    if(instance) return instance;

    const dbFileLocation =  electron 
             ? `${dbFolder}/${databaseName}.db`
             : path.join(__dirname, `../../db/${databaseName}.db`);

    const db = level(dbFileLocation, { valueEncoding: 'json' });

    instance = <DataStore> {
        Accounts: sublevel(db, 'accounts', { valueEncoding: 'json'}),
        Profiles: sublevel(db, 'profiles', { valueEncoding: 'json'}),
        Characters: sublevel(db, 'characters', { valueEncoding: 'json'}),
        Items: sublevel(db, 'items', { valueEncoding: 'json'}),
        Machines: sublevel(db, 'machines', { valueEncoding: 'json'}),
        Preference: sublevel(db, 'preferences', { valueEncoding: 'json'}), 
        Plugins: sublevel(db, 'plugins', { valueEncoding: 'json'}),
    };
    return instance;
}
