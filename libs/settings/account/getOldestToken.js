import settings from "..";

export default async function () {
    const appSettings = await settings.get();
    let oldest = {};
    appSettings.accounts.map(i => {
        const actTimestamp =  parseInt(i.tokens['ACCOUNT_TS']); 
        if(!oldest.timestamp || oldest.timestamp > actTimestamp){
            oldest = {
                timestamp: actTimestamp,
                account: i.name,
                localTime: new Date(actTimestamp * 1000),
            }
        }
    });
    return oldest;
}