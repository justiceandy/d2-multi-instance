import { Store } from '@d2r/level-db'
import { LaunchEvent } from '@d2r/level-db/types';


/**
 * {@link list} List all Stored Launch events
 * @returns [{@link LaunchEvent}] 
 */
export const list = async () => {
    const { LaunchEventDB } = await Store({});
    const events : LaunchEvent[] = [];
    /* @ts-expect-error */
    for await (const [key, value] of LaunchEventDB.iterator() ) {
       const eventData : LaunchEvent = value;
       events.push(eventData);
    }
    return events
}
 