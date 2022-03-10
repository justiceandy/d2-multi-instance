import { list } from './list';
/*
    Module returns account with matching folder
*/
export const getByFolder = async ({ folder }:any) => {
    const accounts = await list();
    const result = accounts.filter((x:any) => x.folder === folder).pop();
    return result;
}
 