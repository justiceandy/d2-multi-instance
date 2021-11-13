import listAccounts from './list';

export default async function (directory) {
    const accounts = await listAccounts();
    const result = accounts.filter(x => x.folder === directory).pop();
    return result;
}
 