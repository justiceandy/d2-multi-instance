import * as cryptor from '../libs/encrypt';
import { get } from './get';
import { update } from './update';
import { Account } from '@d2r/level-db/types';

/**
 * {@link getPassword} Gets a Accounts Battle.net Password.
 * Decrypts value with {@link crytor.decrypt}
 * @param email Battle.net Email Address
 * @returns boolean 
 */
export const getPassword = async (email:string) => {
    const account : Account = await get({
        filter: 'email',
        filterValue: email,
    });
    const decrypted = cryptor.decrypt(account.password);
    return decrypted;
}

/**
 * {@link setPassword} Sets an Accounts Battle.net Password.
 * Encrypts value with {@link crytor.encrypt}
 * @param id Internal DRMA Account ID 
 * @param password Raw Password String to Store 
 * @returns boolean 
 */
export const setPassword = async ({ id, password }:any) => {
    const encrypted = await cryptor.encrypt(password);
    const updated = await update({
        id,
        payload: {
            password,
        }
    });
    return true;
}
