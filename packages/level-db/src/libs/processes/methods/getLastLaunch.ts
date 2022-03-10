import { list } from './list';


export const getLastLaunch = async ({ processes }: any) => {
    const events = processes ? processes : await list();
    /*@ts-expect-error */
    const sorted = events.sort((a, b) => b.created - a.created);
    return sorted.pop();
}
