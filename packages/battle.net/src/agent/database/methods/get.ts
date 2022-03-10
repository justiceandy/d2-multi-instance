/*@ts-ignore-error */
import sqlite3 from "sqlite-async"

export const sqlQueries = {
    accountId:  `select value from key_value_store where key = 'features_cached_data_points'`,
    battleTags:  `select * from login_cache `
}

export type getDatabaseOptions = {
    query: 'accountId' | 'battleTags',
    dir?: string
}
const defaults : Partial<getDatabaseOptions> = {
    dir:  "C:\\Users\\Diablo2\\AppData\\Local\\Battle.net",
}
export const get = async (args:getDatabaseOptions) => {
    const params : getDatabaseOptions = Object.assign({}, defaults, args);
    const { dir, query } = params;
    
    const dbFile = `${dir}\\CachedData.db`;
    const db = await sqlite3.open(dbFile, sqlite3.OPEN_READ);
    const sqlQ = sqlQueries[query];
    
    const rows = await db.all(sqlQ, (err: { message: string}, rows: object[] ) => {
        if (err) { console.error(err.message); }
        return rows;
    });
    const closed = await db.close();
    return rows;
}
