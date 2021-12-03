import ffi from 'ffi-napi'
const { keyboard, Key, mouse, left, right, up, down, screen, sleep, straightTo, centerOf } = require("@nut-tree/nut-js");


const makeActiveWindow = (title) => {
    const user32 = new ffi.Library('user32', {
        'GetTopWindow': ['long', ['long']],
        'FindWindowA': ['long', ['string', 'string']],
        'SetActiveWindow': ['long', ['long']],
        'SetForegroundWindow': ['bool', ['long']],
        'BringWindowToTop': ['bool', ['long']],
        'ShowWindow': ['bool', ['long', 'int']],
        'SwitchToThisWindow': ['void', ['long', 'bool']],
        'GetForegroundWindow': ['long', []],
        'AttachThreadInput': ['bool', ['int', 'long', 'bool']],
        'GetWindowThreadProcessId': ['int', ['long', 'int']],
        'SetWindowPos': ['bool', ['long', 'long', 'int', 'int', 'int', 'int', 'uint']],
        'SetFocus': ['long', ['long']]
    });
    const kernel32 = new ffi.Library('Kernel32.dll', {
        'GetCurrentThreadId': ['int', []]
    });
    const winToSetOnTop = user32.FindWindowA(null, title)
    const foregroundHWnd = user32.GetForegroundWindow()
    const currentThreadId = kernel32.GetCurrentThreadId()
    const windowThreadProcessId = user32.GetWindowThreadProcessId(foregroundHWnd, null)
    const showWindow = user32.ShowWindow(winToSetOnTop, 9)
    const setWindowPos1 = user32.SetWindowPos(winToSetOnTop, -1, 0, 0, 0, 0, 3)
    const setWindowPos2 = user32.SetWindowPos(winToSetOnTop, -2, 0, 0, 0, 0, 3)
    const setForegroundWindow = user32.SetForegroundWindow(winToSetOnTop)
    const attachThreadInput = user32.AttachThreadInput(windowThreadProcessId, currentThreadId, 0)
    const setFocus = user32.SetFocus(winToSetOnTop)   
    const setActiveWindow = user32.SetActiveWindow(winToSetOnTop);
}

const isLoggingIn = async () => {
    const result = await screen.waitFor("loggingIn.png", 8000).catch(err => null);
    return result;
}
const isNotLoggedIn = async () => {
    const result = await screen.waitFor("loginButton.png", 8000).catch(err => null);
    return result;
}
const isAlreadyLoggedIn = async () => {
    const result = await screen.waitFor("play.png", 8000).catch(err => null);
    return result;
}

const isCharSelect = async () => {
    const result = await mouse.move(straightTo(centerOf(screen.waitFor("LoggedInPlay.png", 10000)))).catch(err => null);
    return result;
}

const isQue = async () => {
    const result = await mouse.move(straightTo(centerOf(screen.waitFor("que.png", 10000)))).catch(err => null);
    return result;
}

// Handle Login
const onLoginShown = async ({ username, password }) => {
    console.log('Sign in Page Found')
    makeActiveWindow('Battle.net Login');
    // Determine if we are logged in
    const [ loggingIn, notLoggedIn, alreadyLoggedIn ] = await Promise.all([ 
        isLoggingIn(), 
        isNotLoggedIn(),
        isAlreadyLoggedIn(),
    ]).catch(err => [err, err, err]);
    console.log('After');
    console.log( {loggingIn, notLoggedIn, alreadyLoggedIn })

    if(!loggingIn && !alreadyLoggedIn){
        console.log('Logging In')
        await keyboard.type(password);
        await mouse.move(straightTo(centerOf(screen.waitFor("loginButton.png", 5000))));
        await mouse.leftClick();
    }
}

export default async function({ pid, email, password }){
    keyboard.config.autoDelayMs = 5;
    // Active Window is Bnet
     //screen.config.confidence = 0.97;
    mouse.config.mouseSpeed = 45000;
    screen.config.resourceDirectory = `${__dirname}/../../../assets`;

    try {
        await screen.waitFor("BigBnet.png", 7000);
        // Make Launcher Active Window
        // Check for Login Screen
        await onLoginShown({ email, password });
    } catch(e) {
        await mouse.move(straightTo(centerOf(screen.waitFor("play.png", 10000))));
    }

    
    // Check for Play Button
    // -- Updating -- Que Button
    await mouse.move(straightTo(centerOf(screen.waitFor("play.png", 10000))));


    console.log('Play Button Found')
    await mouse.leftClick();
    console.log('Play Button Clicked');
    console.log('Sleeping after Play')
    await sleep(4000);
    console.log('Make D2R Active Window');
    makeActiveWindow('Diablo II: Resurrected')    
    console.log('Skipping Video')
    for(let x = 0; x < 5; x++) {
        await keyboard.pressKey(Key.Space);  
        await keyboard.releaseKey(Key.Space);
    }
    console.log('Waiting After Intro Skip')
    // While Waiting on Intro Skip, Kill the Handler
    await mouse.move(straightTo(centerOf(screen.waitFor("pressKey.png", 5000))));
    console.log('Found Press Key')
    await mouse.leftClick();
    await mouse.leftClick();
    console.log('Logging Into Char Select')

    // Determine if we are in Que or At the Character Select Screen
    const [ charSelect, qued ] = await Promise.all([ 
        isCharSelect(), 
        isQue(),
    ]).catch(err => [err, err]);

    console.log('Char Select', charSelect);
    console.log('qued', qued);

    if(!qued){
        
    }
    return {
        loggedIn: true,
    }
}
