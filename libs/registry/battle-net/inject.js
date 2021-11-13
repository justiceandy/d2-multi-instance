/*
    Module Injects Account Tokens into Windows Registry
     - This enables D2R.exe to launch w/o battle net if tokens are still valid
*/
import regedit from 'regedit';
import registryKeys from './keys';
import get from './get';
import util from 'util';

export default async function ({
    account, accountState, webToken, timestamp, silent = false, rotate,
}) {
    
    const currentKeys = await get();
    const result = {
        updated: false,
        validated: {
            tokens: null,
            state: null,
            account: null,
        }
    }

    const osiKey = `${registryKeys.osi.type}\\${registryKeys.osi.name.replaceAll('/','\\')}`
    const registryPayload = {};
    
    registryPayload[osiKey] = {
        'ACCOUNT': {
            value: account,
            type: 'REG_BINARY'
        },
        'ACCOUNT_STATE': {
            value: accountState,
            type: 'REG_BINARY'
        },
        'WEB_TOKEN': {
            value: webToken,
            type: 'REG_BINARY'
        },
        'ACCOUNT_TS': {
            value: timestamp,
            type: 'REG_SZ'
        },
    };

    result.validated.tokens = !util.isDeepStrictEqual(currentKeys[osiKey].values['WEB_TOKEN'].value, registryPayload[osiKey]['WEB_TOKEN'].value);
    result.validated.state = !util.isDeepStrictEqual(currentKeys[osiKey].values['ACCOUNT_STATE'].value, registryPayload[osiKey]['ACCOUNT_STATE'].value);
    result.validated.account = !util.isDeepStrictEqual(currentKeys[osiKey].values['ACCOUNT'].value, registryPayload[osiKey]['ACCOUNT'].value);

    if(!silent) {
        console.log('----------------------')
        console.log('Web Tokens Are New:', result.validated.tokens);
        console.log('----------------------')
        console.log('Account State is New:', result.validated.state);
        console.log('----------------------')
        console.log('Account is New:', result.validated.account);
        console.log('----------------------')
    }

    if(result.validated.tokens && result.validated.state && result.validated.account){
        result.updated = true;
        regedit.putValue(registryPayload, (e) => null);
    }
    
    return result;
}