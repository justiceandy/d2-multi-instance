/*
    Module Handles Creating the TOS Key for Handle64
*/
/*@ts-ignore-error */
import regedit from 'regedit';
import { handleEula, HandleKey, HandleUpdatePayload } from './keys';

/*
    Create Handle EULA Accepted Registry Key
*/
export const create = async () => {
    const createdKey = await regedit.promisified.createKey([handleEula.full]);
    return createdKey;
}

/*
    Get Handle EULA Accepted Registry Key
*/
export const get = async () => {
    const registryList = await regedit.promisified.list([handleEula.full]);
    const handleTos = registryList[handleEula.full];
    return handleTos.values
}

/*
    Update EULA Accepted Registry Key
*/
export const update = async (agree?:boolean) => {
    const agreementKey : Partial<HandleUpdatePayload> = {}; 
          agreementKey[handleEula.full] = {
            'EulaAccepted': {
                value: agree ? '1' : '0',
                type: 'REG_DWORD'
            }
          } 
    await regedit.promisified.putValue(agreementKey);
    return true;
}
