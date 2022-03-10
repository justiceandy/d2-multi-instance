import { tokens, processes, launchEvents } from '@d2r/level-db';
/*
    Called on Each Registry Token Change
*/

export interface DetermineAccountOptions {
    ACCOUNT_TS: string
    GAME_ACCOUNT: string
    WEB_TOKEN: string
}

export type AccountDecision = {
    processId: string | null,
    decisionMethod: 'single' | 'launched' | 'multi' | 'tokenMatch' | 'none',
    account: string | null,
    existing: boolean,
}
export const determineAccount = async (args:DetermineAccountOptions) => {
    const { ACCOUNT_TS, WEB_TOKEN } = args;

    let result : AccountDecision = {
        processId: null,
        decisionMethod: 'none',
        account: null,
        existing: false,
    }
    
    // Get Currently Running Processes
    const runningProcs = await processes.list();
    // Get Last Launched
    const lastLaunched = await launchEvents.getLatest();

    // Check if Token is already stored in database
    const currentToken = await tokens.get({ 
        filter: 'web_token',
        filterValue: WEB_TOKEN,
     });
     
     if(currentToken) {
        result.account = currentToken.account;
        result.existing = true;
        result.decisionMethod = 'tokenMatch';
     };

     // if we dont have current token stored, we need to determine the account
     if(!currentToken) {

        // Check If Last Launch Event Account Exists in Running Procs
        // if it doesn't, this is the refresh token when 'play' is clicked
        // and wont have an associated D2R.exe process yet
        const isLaunchingToken = runningProcs.filter(i => i.account === lastLaunched?.account).length === 0;

        if(isLaunchingToken) {
            result = Object.assign({}, result, {
                account: lastLaunched?.account,
                decisionMethod: 'launched'
            })
        };
        
        // If we only have 1 process, we know what account this is
        if(runningProcs.length === 1 && !isLaunchingToken){
            result = Object.assign({}, result, {
                account: runningProcs[0].account,
                processId: runningProcs[0].processId,
                decisionMethod: 'single'
            })
        }

        // If we have multiple processes, we need to check
        if(runningProcs.length > 1 && !isLaunchingToken){

            // Check which processes dont have 3 Refresh Events

            // Otherwise Default to Refresh Timestamp Order

            // Sort Processes by oldest refresh time
            result = Object.assign({}, result, {
                decisionMethod: 'multi'
            })
        }
     }

    // Update Token Found Count
    console.log('Refresh Token Recieved For Account:');
    console.log(result);
    console.log('--------------------------------')
    return result;
}
