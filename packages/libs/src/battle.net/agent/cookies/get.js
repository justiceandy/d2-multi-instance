import sqlite3 from "sqlite-async"

const defaultDir = "C:\\Users\\Diablo2\\AppData\\Local\\Battle.net\\BrowserCache"

/**
 Module Returns the cookies for local bnet agent browser
    - internal chromium
*/
const get = async ({ dir = defaultDir }) => {
    const dbFile = `${dir}\\Cookies`;
    const db = await sqlite3.open(dbFile, sqlite3.OPEN_READ);
    const rows = await db.all(`select * from cookies`, (err, rows) => {
        if (err) { console.error(err.message); }
        return rows;
    });
    const closed = await db.close();
    return rows;
}

export {
    get
}

export default get;