import fs from 'fs/promises';

export interface ListSessionOptions {
    dir?: string
    CacheProvider?: any
    Store?: any
}

const defaults : Partial<ListSessionOptions> = {
    dir: "C:\\ProgramData\\Battle.net\\Agent\\Logs"
}

export type SessionID = string;

export const list = async (args?:ListSessionOptions) : Promise<SessionID[]> => {
    const { dir, CacheProvider, Store } : ListSessionOptions = Object.assign({}, defaults, args);
    const folder = await fs.readdir(dir!);
    // Grab All Files in Dir
    const files = await Promise.all(
        folder.map(i => fs.readFile(`${dir}/${i}`))
    );
    const uniqueSession : string[] = [];

    files.map( 
        i => (i.toString().split('--session=')[1].split('\'')[0]))
                .filter( i => !uniqueSession.includes(i) ? uniqueSession.push(i) : null);

    return uniqueSession;
}
