/*
    Module Returns OSI Key from Windows Registry
*/
/*@ts-ignore-error */
import regedit from 'regedit';
import { osi, d2rSource, bnetSource } from './keys';
import { RegistryOSIPayload } from './keys';

type RegKey = string;

export interface KeyOptions {
    key?: string
}
const defaults = {
    key: null
}

export type RegistryKeyStore = {
    [key: string]:  RegistryOSIPayload
}

/**
 * {@link get} returns current values stored in Windows Registry
 * @param key Optional Single Key selector instead of all
 */
export const get = async (key:string) => {
    const regKeys : RegKey[] = [ key ];
    const keyValues : RegistryOSIPayload = await regedit.promisified.list(regKeys);
    let result : any = {};
    Object.keys(keyValues).map(key => {
        const valueObject : RegistryOSIPayload = {};
        Object.keys(keyValues[key].values).map(keyItem => valueObject[keyItem] = keyValues[key].values[keyItem].value)
        result = valueObject
    });
    return result;
}


/**
 * {@link getAll} returns current values stored in Windows Registry
 * @param key Optional Single Key selector instead of all
 */
 export const getAll = async (args?:KeyOptions) => {
    const regKeys : RegKey[] = [ osi.full, d2rSource.full, bnetSource.full ]
    const keyValues : RegistryOSIPayload = await regedit.promisified.list(regKeys);
    const result : RegistryKeyStore = {};
    Object.keys(keyValues).map(key => {
        const valueObject : RegistryOSIPayload = {};
        Object.keys(keyValues[key].values).map(keyItem => valueObject[keyItem] = keyValues[key].values[keyItem].value)
        return result[key] = valueObject
    });
    return result;
}
