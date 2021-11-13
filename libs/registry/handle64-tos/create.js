/*
    Module Handles Creating the TOS Key for Handle64
*/
import regedit from 'regedit';

export default async function () {
    const createdKey = await regedit.promisified.createKey(['HKCU\\Software\\Sysinternals\\Handle']);
    return createdKey;
}