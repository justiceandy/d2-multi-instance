import ffi from 'ffi-napi'
import ref from 'ref-napi'
import wchar from 'ref-wchar-napi'
import process from 'process'

/*
    Module Creates Windows Event Hook for notifications about Active Application Window
     Credits: https://github.com/realmhamdy/node-ffi-bind-setwineventhook
*/
export default async function () {
    const EVENT_SYSTEM_FOREGROUND = 3;
    const WINEVENT_OUTOFCONTEXT = 0;
    const WINEVENT_SKPIOWNPROCESS = 2;

    const msgType = ffi.Function('void', [ "void *" ]);
    const msgPtr = ref.refType(msgType);

    const user32 = ffi.Library("user32", {
        SetWinEventHook: ["int", ["int", "int", "pointer", "pointer", "int", "int", "int"]],
        GetWindowTextW: ["int", ["pointer", "pointer", "int"]],
        GetWindowTextLengthW: ["int", ["pointer"]],
        GetMessageA: ["bool", [msgPtr, "int", "uint", "uint"]]
    })
    
    const getMessage = () => user32.GetMessageA(ref.alloc(msgPtr), null, 0, 0);
    const emitProcessEvent = async (msg) => process.send(msg);

    const pfnWinEventProc = ffi.Callback("void", ["pointer", "int", "pointer", "long", "long", "int", "int"],
        (hWinEventHook, event, hwnd, idObject, idChild, idEventThread, dwmsEventTime) => {
            const windowTitleLength = user32.GetWindowTextLengthW(hwnd);
            const bufferSize = windowTitleLength * 2 + 4;
            const titleBuffer = Buffer.alloc(bufferSize);
            user32.GetWindowTextW(hwnd, titleBuffer, bufferSize);
            const titleText = ref.reinterpretUntilZeros(titleBuffer, wchar.size);
            const finallyWindowTitle = wchar.toString(titleText);
            if(finallyWindowTitle === 'Diablo II: Resurrected') {
                emitProcessEvent('found');
            }
            return
        }
    )

    user32.SetWinEventHook(EVENT_SYSTEM_FOREGROUND, EVENT_SYSTEM_FOREGROUND, null, pfnWinEventProc,
        0, 0, WINEVENT_OUTOFCONTEXT | WINEVENT_SKPIOWNPROCESS)
    
    let res = getMessage()
    
    while(res != 0) {
        switch (res) {
            case -1:
                console.log("Invalid GetMessageA arguments or something!");
                break
            default:
                console.log("Got a message!");
        }
        res = getMessage();
    }
}
