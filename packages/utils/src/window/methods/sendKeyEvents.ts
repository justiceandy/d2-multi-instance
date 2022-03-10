import { U as User32 } from 'win32-api'
import * as ref from 'ref-napi'
import { toVKCode } from '../libs/win-vk'
/*
  Module Handles Setting an External Application Window Title
*/
export interface SendKeyEventArgs {
    title: string
    key: string,
    delay?: number,
}

const keyDown = ({
  user32,
  hWnd,
  key,
  delay = 3000,
}:any) => new Promise((resolve, reject) => {
  const keyCode = toVKCode(key);
  const WM_KEYDOWN = 0x0100;
  user32.PostMessageW(hWnd, WM_KEYDOWN, keyCode, 0);
  setTimeout(resolve, delay);
})

const keyUp = ({
  user32,
  hWnd,
  key,
  delay = 3000,
}:any) => new Promise((resolve, reject) => {
  const keyCode = toVKCode(key);
  const WM_KEYUP = 0x0101;
  console.log('Pressing Key:', key);
  user32.PostMessageW(hWnd, WM_KEYUP, keyCode, 0);
  setTimeout(resolve, delay);
})

const keyPressEvent = async ({
  user32,
  hWnd,
  key,
  delay,
}:any) => {
 
  await keyDown({
    user32,
    hWnd,
    key,
    delay,
  });

  await keyUp({
    user32,
    hWnd,
    key,
    delay,
  })
  
  return true;
}
export const sendKeyEvent = async (args:SendKeyEventArgs) => {
    const { title, key, delay } = args;
    const user32 = User32.load()
    const lpszWindow = Buffer.from(`${title}\0`, 'ucs2')
    const hWnd = user32.FindWindowExW(0, 0, null, lpszWindow);
    if (typeof hWnd === 'number' && hWnd > 0
      || typeof hWnd === 'bigint' && hWnd > 0
      || typeof hWnd === 'string' && hWnd.length > 0
    ) {
      await keyPressEvent({
        user32,
        hWnd,
        key,
        delay,
      });
      return true;
    }

    return false;
}

