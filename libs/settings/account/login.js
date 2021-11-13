import ffi from 'ffi-napi'
import robotjs from 'robotjs';


export default async function({ username, password }){
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

    const winToSetOnTop = user32.FindWindowA(null, "Battle.net Login")
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

    // Active Window is Bnet
    await robotjs.keyTap("tab", "shift")
    await robotjs.keyTap("delete")
    await robotjs.typeString(username);
    await robotjs.keyTap("tab");
    await robotjs.typeString(password);
    await robotjs.keyTap("tab");
    await robotjs.keyTap("tab");
    await robotjs.keyTap("tab");
    await robotjs.keyTap("enter");
    return true;
}
