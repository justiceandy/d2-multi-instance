/*
    Module Handles Checking the Terms of Service Registry Key for SysInternals Handle.exe
*/
import regedit from 'regedit';

export default async function () {
    const registryList = await regedit.promisified.list(['HKCU\\Software\\Sysinternals\\Handle']);
    const handleTos = registryList['HKCU\\Software\\Sysinternals\\Handle'];
    return handleTos
}