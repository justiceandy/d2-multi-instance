import { LaunchEvent } from '../types/LaunchEvent';
import { list } from './list';

export interface GetLatestArgs {
    events?: LaunchEvent[]
}
/**
 * {@link getLatest} Returns Last (Latest) Launch Event
 * @param events Include array to avoid Database Query
 * @returns LaunchEvent
 */
export const getLatest = async (args?:GetLatestArgs) => {
    const eventList = args && args.events ? args.events : await list();
    /*@ts-expect-error */
    const sorted = eventList.sort((a, b) => b.triggered - a.triggered);
    return sorted.pop();
}
