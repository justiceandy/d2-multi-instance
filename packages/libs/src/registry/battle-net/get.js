/*
    Module Handles Checking/Setting the Terms of Service Registry Key for SysInternals Handle.exe
    - without this, users get an error until manually running handle64.exe and accepting the license

    We do this behind the scenes since nobody reads that anyway ¯\_(ツ)_/¯
*/

import regedit from 'regedit';
import registryKeys from './keys';

export default async function () {
    const keyArray = Object.keys(registryKeys).map(
        i => `${registryKeys[i].type}\\${registryKeys[i].name.replaceAll('/', '\\')}`
    )
    return await regedit.promisified.list(keyArray);
}