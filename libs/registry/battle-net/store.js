/*
    Module Handles Formatting the Battle.Net Token Data for Settings and Storing the .Bin files 
*/
import base64 from 'base-64';
import shortHash from 'short-hash';
import settings from '../../settings';
import fs from 'fs/promises';
import path from 'path';
import processCache from '../../d2process/cache';
import listProcesses from '../../d2process/list';
import e from 'cors';

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
            accountData = {
                name: existing.name,
                gameFolder: existing.folder,
                lastToken: existing.tokens['WEB_TOKEN'],
                tokenTime: existing.tokens['ACCOUNT_TS'],
            }
        } else {
            console.log('No Session Found for Token', result.tokens['ACCOUNT'], eventTime.split(' ')[1])
            return false;
        }
    }
    
    const { gameFolder, name, lastToken = null, tokenTime = null } = accountData;
    result.account = name;

    if(gameFolder){
        const savedAuthToken = {
            token: keys['WEB_TOKEN'].value,
            account: keys['ACCOUNT'].value,
            state: keys['ACCOUNT_STATE'].value,
            timestamp: keys['ACCOUNT_TS'].value,
        };
        // Compare Web Tokens
        if(lastToken) {
            const matchingToken = lastToken === result.tokens['WEB_TOKEN'];
            if(!matchingToken) {
                console.log('Capturing Session:', name, `${gameFolder}/multi-launcher-auth.bin`)
                const currentProcCache = await listProcesses();
                const thisProcess = currentProcCache.running.filter(i => {
                   return i.name === accountData.name
                }).pop();
                console.log('Tokens Updated:', name, thisProcess.pid, lastToken, result.tokens['WEB_TOKEN'], eventTime.split(' ')[1]);
                const base64Token = Buffer.from(JSON.stringify(savedAuthToken)).toString('base64');
                // Write Tokens to Game Folder
                await fs.writeFile(path.resolve(`${gameFolder}/multi-launcher-auth.bin`), base64Token);
                // Update Cache
                await processCache.updateTokens({ pid: thisProcess.pid, name, tokens: result.tokens });
            } else {
                // console.log('Skipping Save, tokens match')
            }
        }
    }
  
    // If we have the PID
    if(pid) {
        await processCache.updateTokens({ pid, name, tokens: result.tokens });
    }

    return await result;
}