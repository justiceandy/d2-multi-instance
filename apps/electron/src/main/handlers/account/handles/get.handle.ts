// @ts-nocheck
import { settings } from '@d2r/libs';

export default async ({ display, includeAll = false }) => {
    const accountData = await settings.account.AccountStore.get();
    let order = null;
    const thisAccount = accountData.filter((i, index) =>{
        if(i.display === display) {
            order = index;
            return true;
        };
        return false;
    }).pop();
    if(!includeAll) return thisAccount;
    return { account: thisAccount, accounts: accountData, order }
}
