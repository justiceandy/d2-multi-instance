/*
    Module Injects Account Tokens into Windows Registry
     - This enables D2R.exe to launch w/o battle net if tokens are still valid
*/
import regedit from 'regedit';
import registryKeys from './keys';
import get from './get';

export default async function ({
    account, accountState, webToken, timestamp, validate = true
}) {

    // Validate that are Byte Arrays

    // Validate that is epoch timestamp

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

    if(validate) {
        const currentKeys = await get();
        console.log('----------------------')
        console.log(currentKeys[osiKey].values['WEB_TOKEN'].value);
        console.log(registryPayload[osiKey]['WEB_TOKEN'].value)
        console.log('----------------------')
        console.log(currentKeys[osiKey].values['ACCOUNT_STATE'].value);
        console.log(registryPayload[osiKey]['ACCOUNT_STATE'].value)
        console.log('----------------------')
        console.log(currentKeys[osiKey].values['ACCOUNT'].value);
        console.log(registryPayload[osiKey]['ACCOUNT'].value)
        console.log('----------------------')
    }
    regedit.putValue(registryPayload, (e) => {
        console.log(e)
    });
    return true;
}