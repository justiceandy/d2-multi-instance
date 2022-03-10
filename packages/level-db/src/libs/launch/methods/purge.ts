import { list } from './list';

/**
 * {@link prune} Remove all Launch Events older than 24 hours
 * @returns boolean 
 */
export const purge = async () => {
    // Create Current Timestamp for now -24 hours
    const compareDate = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    const currentLaunchEvents = await list();

    const deleteEvents = currentLaunchEvents.filter(i =>
        i.triggered > compareDate    
    );

    console.log('Deleting', deleteEvents);

    return true;
}
