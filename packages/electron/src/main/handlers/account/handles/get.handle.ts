// @ts-nocheck
import { AccountStore } from '../../../store/accounts'

export default async ({ display, includeAll = false }) => {
    const accountData = await AccountStore.get(`accounts`);
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