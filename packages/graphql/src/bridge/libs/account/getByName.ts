import { list } from './list';

/*
    Module returns account with matching name
*/
export const getByName = async ({ name }:any) => {
    const accounts = await list();
    const result = accounts.filter((x:any) => x.name === name).pop();
    return result;
}
 