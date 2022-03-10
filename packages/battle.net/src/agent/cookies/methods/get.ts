/*@ts-ignore-error */
import sqlite3 from "sqlite-async"
const defaultDir = "C:\\Users\\Diablo2\\AppData\\Local\\Battle.net\\BrowserCache"
/**
 Module Returns the cookies for local bnet agent browser
    - internal chromium
*/
export interface GetCookieOptions {
    dir?: string
}
const defaults : Partial<GetCookieOptions> = {
    dir: "C:\\Users\\Diablo2\\AppData\\Local\\Battle.net\\BrowserCache",
}
export const get = async (args?:GetCookieOptions) => {
    const { dir } : GetCookieOptions = Object.assign({}, defaults, args || {});
    const dbFile = `${dir}\\Cookies`;
    const db = await sqlite3.open(dbFile, sqlite3.OPEN_READ);
    const rows = await db.all(`select * from cookies`, (err:any, rows:object[]) => {
        if (err) { console.error(err.message); }
        return rows;
    });
    const closed = await db.close();
    return rows;
}
