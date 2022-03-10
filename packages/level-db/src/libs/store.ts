import level from 'level';
import sublevel from 'subleveldown'
import path from 'path';
import { LevelUp } from 'levelup';


export type DataType = 
    "AccountDB" | "CharacterDB" | "LaunchEventDB" | "LogDB"  | "MachineDB" |
    "MarketplaceDB" | "PluginDB" | "PreferenceDB" | "PresetDB" | "ProcessDB" | 
    "ProfileDB" | "SquadDB" | "StashDB" | "TokenDB" | "UserDB";

export interface StoreArgs {
    electron?: boolean;
    databaseName?: string;
    include?: DataType[]
}

export interface DataStore {
    [key: string]: LevelUp,
}

export interface StoreAPI {
    [key: string]: DataStore
}

// Defaults
let existingStore : DataStore | null = null;;

const defaults = {
    electron: false, 
    databaseName: 'default',
    include: <DataType[]> [
        "AccountDB",
        "CharacterDB",
        "LaunchEventDB",
        "LogDB",
        "MachineDB",
        "MarketplaceDB",
        "PluginDB",
        "PreferenceDB",
        "PresetDB",
        "ProcessDB",
        "ProfileDB",
        "SquadDB",
        "StashDB",
        "TokenDB",
        "UserDB",
    ]
}

/**
 * {@link Store} Returns a LevelUp {@link DataStore} that divided into sublevels based on datatype.
 * @param electron If initialized within an electron process
 * @param databaseName Database Name on Disk. Defaults to `default`
 * @param include Array of SublevelDBs to initialize {@link defaults.include}. Defaults to all
 */
export const Store = async (args?:StoreArgs) => {
    const { include, electron, databaseName } = Object.assign({}, defaults, args);
    const dataStore : DataStore = {};
    
    if(existingStore) return existingStore;

    const dbFolder = process.env.STORE_DATA_SRC || process.env.APPDATA ||  process.env.HOME + "/.local/share";
    const dbFileLocation =  electron 
             ? `${dbFolder}/${databaseName}.db`
             : path.join(__dirname, `../data/${databaseName}.db`);
    
    const db = level(dbFileLocation, { valueEncoding: 'json' });

    include.map(key => dataStore[key] = sublevel(db, key, { valueEncoding: 'json'}))

    existingStore = dataStore;

    return dataStore;
}
