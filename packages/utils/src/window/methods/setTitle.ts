import { U as User32 } from 'win32-api'
import * as ref from 'ref-napi'

/*
  Module Handles Setting an External Application Window Title
*/
export interface SetWindowTitle {
    from: string
    to: string
}
export const setTitle = async (args:SetWindowTitle) => {
    const { from, to } = args;
    const user32 = User32.load()
    const title = `${from}\0`
    const lpszWindow = Buffer.from(title, 'ucs2')
    const hWnd = user32.FindWindowExW(0, 0, null, lpszWindow)
     
    if (typeof hWnd === 'number' && hWnd > 0
      || typeof hWnd === 'bigint' && hWnd > 0
      || typeof hWnd === 'string' && hWnd.length > 0
    ) {
      // Change title
      const res = user32.SetWindowTextW(hWnd, Buffer.from(`${to}\0`, 'ucs2'))
      if (!res) return false
      return true
    }

    return false;
}

