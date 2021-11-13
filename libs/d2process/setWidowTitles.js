import { K, U } from 'win32-api'
import * as ref from 'ref-napi'

/*
  Module Handles Setting an External Application Window Title
*/
export default async function(value) {
    const user32 = U.load()
    const title = `Diablo II: Resurrected\0`
    const lpszWindow = Buffer.from(title, 'ucs2')
    const hWnd = user32.FindWindowExW(0, 0, null, lpszWindow)
     
    if (typeof hWnd === 'number' && hWnd > 0
      || typeof hWnd === 'bigint' && hWnd > 0
      || typeof hWnd === 'string' && hWnd.length > 0
    ) {
      // Change title
      const res = user32.SetWindowTextW(hWnd, Buffer.from(`${value}\0`, 'ucs2'))
      
      if (!res) return false
      return true
    }

    return null;
}
