import sqlite3 from "sqlite-async"

const defaultDir = "C:\\Users\\Diablo2\\AppData\\Local\\Battle.net"

const queries = {
    accountId: 
        `select value from key_value_store where key = 'features_cached_data_points'`,
    battleTags: 
        `select * from login_cache `
}

const get = async ({ dir = defaultDir, query = 'battleTags' }) => {
    const dbFile = `${dir}\\CachedData.db`;
    const db = await sqlite3.open(dbFile, sqlite3.OPEN_READ);
    const sqlQ = queries[query];
    const rows = await db.all(sqlQ, (err, rows) => {
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