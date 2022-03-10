import { Store } from '../store'
/*
    Module returns array of stored accounts
*/
export const list = async () => {
    const { Profiles } = await Store({});
    const profiles : any = [];
    for await (const [key, value] of Profiles.iterator()) {
        profiles.push(value);
    }
    return profiles
}
 