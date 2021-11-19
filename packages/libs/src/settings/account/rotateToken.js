import settings from "..";
import inject from "./inject";

export default async function () {
    const eventTime = new Date().toLocaleString('en-US', { timeZone:  Intl.DateTimeFormat().resolvedOptions().timeZone });
    const oldestToken = await settings.account.getOldestToken({ running: true, active: false });
    
    if(!oldestToken) return null

    // Is Token Already Injected
    console.log('Rotate Token Start:', oldestToken.account, eventTime.split(' ')[1]);
    const injected = await inject({ 
        account: oldestToken.account, 
        silent: true,
        rotate: true,
    });
    console.log('Rotate Token Finish:', oldestToken.account, injected, eventTime.split(' ')[1]);
    return true;
}