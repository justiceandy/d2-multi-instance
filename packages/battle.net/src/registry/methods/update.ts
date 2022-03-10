/*@ts-expect-error */
import regedit from 'regedit';
import { RegistryUpdateOSI, RegistryOSI, osi } from './keys';
import { get } from './get';
import util from 'util';
/*
    Module Injects Account Tokens into Windows Registry
     - This enables D2R.exe to launch w/o battle net if tokens are still valid
*/
export interface UpdateRegistryOptions {
    account: Number[]
    accountState: Number[]
    webToken: Number[]
    timestamp: string
    validate?: boolean
}

export type ValidatePayload = {
    tokens: boolean,
    state: boolean,
    account: boolean
}
export type RegistryResultPayload = {
    updated: boolean
    validated?: ValidatePayload
}

export const update = async (args:UpdateRegistryOptions) => {
    const { 
        account,
        accountState,
        webToken,
        timestamp,
        validate = true,
     } : UpdateRegistryOptions = args;

     const result : Partial<RegistryResultPayload> = {
        updated: false,
    }

    const newKeys : RegistryOSI = {
        ACCOUNT: {
            value: account,
            type: 'REG_BINARY'
        },
        ACCOUNT_STATE: {
            value: accountState,
            type: 'REG_BINARY'
        },
        WEB_TOKEN: {
            value: webToken, 
            type: 'REG_BINARY'
        },
        ACCOUNT_TS: {
            value: timestamp,
            type: 'REG_SZ'
        }
    }
    const updatePayload : RegistryUpdateOSI = { 
        'HKCU\\Software\\Blizzard Entertainment\\Battle.net\\Launch Options\\OSI': {
           ...newKeys
        }
    };
    
    if(validate) {
        const current = await get(osi.full);
        const validated : ValidatePayload = {
            tokens: !util.isDeepStrictEqual(current['WEB_TOKEN'], newKeys['WEB_TOKEN'].value),
            state: !util.isDeepStrictEqual(current['ACCOUNT_STATE'], newKeys['ACCOUNT_STATE'].value),
            account: !util.isDeepStrictEqual(current['ACCOUNT'], newKeys['ACCOUNT'].value),
        }
        if(!validated.tokens || !validated.state || !validated.account){
            return { 
                updated: false,
                validated,
            }
        }
    }

    result.updated = true;
    await regedit.promisified.putValue(updatePayload, (e:any) => null);

    return result;
}
