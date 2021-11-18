import { createRequire } from 'module';
import settings from '..';

const accounts = [];

const getAccounts = async () => {
    const result = await settings.get();
    result.accounts.map(i => accounts.push(i));
    return accounts;
}

export default function () { 
    return accounts.length ? accounts : getAccounts()
};
 