import { battleNet, d2r } from '.';
import { process } from '@d2r/battle.net';
import { window } from '@d2r/utils';
import pRetry from 'p-retry';
import { sleep } from '@nut-tree/nut-js';

export interface LoginOptions {
    username: string
    password: string
    title?: string
    loginStep?: boolean
    debug?: boolean
    renameWindow?: boolean
    waitForCharSelect?: boolean
    removeHandle?: boolean
    skipIntro?: boolean
    enterQue?: boolean
    hdr?: boolean
    sock?: null
    gameLoad?: number
    initialLoad?: number
    retries?: number
}

const defaults = {
    title: 'Diablo II: Resurrected',
    loginStep: true,
    debug: true,
    hdr: false,
    waitForCharSelect: true,
    skipIntro: true,
    enterQue: true,
    removeHandle: true,
    renameWindow: true,
    initialLoad: 3000,
    gameLoad: 3000,
    retries: 5,
}

const startTime = console.time;
const endTime = console.timeEnd;

export const login = async (args:LoginOptions) => {
    const { 
        password, 
        username, 
        skipIntro, 
        renameWindow,
        waitForCharSelect,
        initialLoad,
        enterQue,
        gameLoad, 
        retries,
        title,
        removeHandle,
    } = Object.assign({}, defaults, args);

    startTime('loginTotal');

    /* Wait For Login Window */
    startTime('loading');
    const appState = await pRetry(
        () => battleNet.waitForLogin({ initialLoad, delay: 3000 }), { retries }
    );
    endTime('loading');
    
    /* Login if needed */
    if(appState === 'login'){
        startTime('login');
        const login = await pRetry(
            () => battleNet.login({ username, password }), { retries }
        );
        endTime('login');
    }
    
    /* Click Play */
    startTime('play');
    const play = await pRetry(
        () => battleNet.play(), { retries }
    );
    endTime('play');
    

    /* Skip Intro */
    startTime('skipIntro');
    const skippedIntro = skipIntro ? await pRetry(
        () => d2r.skipIntro({ username, gameLoad }), { retries }
    ) : null;
    endTime('skipIntro');


    await sleep(2000);

    /* Rename Window */
    startTime('rename');
    const renamed = renameWindow ? 
        await window.setTitle({ from: title, to: username })
    : false;
    endTime('rename');

    /* Enter Que */
    startTime('que');
    const qued = enterQue ? await pRetry(
        () => d2r.enterQue({ username }), { retries }
    ) : null;
    endTime('que');

    
    /* Remove Handler */
    startTime('removeHandle');
    const removedHandle = removeHandle ? await pRetry(
        () => process.disableActiveHandle({ username }), { retries }
    ) : null;
    endTime('removeHandle');
    
    
    await sleep(2000);

    console.log('-------------')
    endTime('loginTotal');

    return {
        loggedIn: true,
        qued,
        renamed,
        skippedIntro,
        removedHandle,
        play,
    }
}
