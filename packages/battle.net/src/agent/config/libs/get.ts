import fs from 'fs/promises';
import { AppDataDir, ConfigFileName } from '../defaults';
/*
    Module Returns Json Config File for Local Battle.net Installation
    - Default location is AppData\Roaming\Battle.net
*/
export type ConfigFileOptions = {
    dir?: string
    account?: string | null
    fileName?: string
}
export const ConfigFileDefaults : ConfigFileOptions = {
    dir: AppDataDir, 
    fileName: ConfigFileName,
    account: null, 
}
export const get = async (args?:ConfigFileOptions) : Promise<any> => {
    const params : ConfigFileOptions = Object.assign({}, ConfigFileDefaults, args);
    const { dir, account, fileName } = params;

    const file = account ?
        `${dir}/${account}.config`
    :   `${dir}/${fileName}`;

    const configFile = await fs.readFile(file);
    
    const result = configFile ?
        JSON.parse(configFile.toString())
    :   null;

    return result;
}

