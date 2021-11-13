/*
    Module Handles Formatting the Battle.Net Token Data for Settings and Storing the .Bin files 
*/
import base64 from 'base-64';
import shortHash from 'short-hash';
import settings from '../../settings';
import fs from 'fs/promises';
import path from 'path';
import { updateTokens } from '../../d2process/cache';

export default async ({ pid = null, account = null, keys }) => {

    // Meta Data w/ Short Hash
    const eventTime = new Date().toLocaleString('en-US', { timeZone:  Intl.DateTimeFormat().resolvedOptions().timeZone });

    const result = {
        pid,
        eventTime,
        tokens: {
            'ACCOUNT': shortHash(base64.encode(keys['ACCOUNT'].value)),
            'ACCOUNT_STATE': shortHash(base64.encode(keys['ACCOUNT_STATE'].value)),
            'ACCOUNT_TS': keys['ACCOUNT_TS'].value,
            'WEB_TOKEN': shortHash(base64.encode(keys['WEB_TOKEN'].value)),
        },
    };

    // Determine Account
    let accountData = account || null;

    // If we dont have account data, attempt to find it by account session token
    if(!accountData ){
        const settingsFile = await settings.get(); 
        const existing = settingsFile.accounts.filter(i => i.tokens['ACCOUNT'] === result.tokens['ACCOUNT']).pop();
        
        if(existing){
            console.log('Found Account by Existing Session', existing.name, eventTime)
            accountData = {
                name: existing.name,
                gameFolder: existing.folder,
                tokenTime: existing.tokens['ACCOUNT_TS'],
            }
        } else {
            console.log('No Session Found for Token', result.tokens['ACCOUNT'], eventTime)
            return false;
        }
    }
    
    const { gameFolder, name, tokenTime = null } = accountData;
    result.account = name;

    if(gameFolder){
        console.log('Capturing Session for', name, `${gameFolder}/multi-launcher-auth.bin`)
        const savedAuthToken = {
            token: keys['WEB_TOKEN'].value,
            account: keys['ACCOUNT'].value,
            state: keys['ACCOUNT_STATE'].value,
            timestamp: keys['ACCOUNT_TS'].value,
        };
        console.log('Saved Tokens', savedAuthToken);
        const base64Token = Buffer.from(JSON.stringify(savedAuthToken)).toString('base64');
        // Write Tokens to Game Folder
        await fs.writeFile(path.resolve(`${gameFolder}/multi-launcher-auth.bin`), base64Token);
    }
  
    // If we have the PID
    if(pid) {
        await updateTokens({ pid, name, tokens: result.tokens });
    }

    return await result;
}