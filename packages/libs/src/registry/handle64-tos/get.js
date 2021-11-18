/*
    Module Handles Checking/Setting the Terms of Service Registry Key for SysInternals Handle.exe
    - without this, users get an error until manually running handle64.exe and accepting the license

    We do this behind the scenes since nobody reads that anyway ¯\_(ツ)_/¯
*/

import regedit from 'regedit';

export default async function () {
    const registryList = await regedit.promisified.list(['HKCU\\Software\\Sysinternals\\Handle']);
    const handleTos = registryList['HKCU\\Software\\Sysinternals\\Handle'];
    return handleTos
}