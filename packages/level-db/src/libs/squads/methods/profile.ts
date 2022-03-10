import { v4 as uuidv4 } from 'uuid';
import { SquadProfile } from '@d2r/level-db/types';
import { get } from './get';
import { update } from './update';
import { Squad } from '../types/Squad';
/**
 * {@link add} Add Account Profile to Squad
 * @returns [{@link SquadProfile}] 
 */
 export interface AddArgs {
    id: string,
    profileId: string,
    machineId: string,
}

export const add = async ({
    id,
    profileId,
    machineId,
}: AddArgs) => {

    const squadData : Squad = await get({
        filter: 'id',
        filterValue: id,
    });

    const newProfile : SquadProfile = {
        order: squadData.profiles.length,
        profileId,
        machineId,
    }
    
    squadData.profiles.push(newProfile);

    await update({ 
        id, 
        payload: squadData,
        merge: false,
    });

    return true;
}


export interface RemoveArgs {
    id: string,
    profileId: string,
}
/**
 * {@link remove} Remove a Profile from a Squad
 * @param id D2RMA Internal ID of Squad
 * @returns boolean 
 */
export const remove = async ({
    id,
    profileId,
}: RemoveArgs) => {

    const squadData : Squad = await get({
        filter: 'id',
        filterValue: id,
    });

    // Remove and Reorder Profiles
    squadData.profiles = squadData.profiles.filter(
        i => i.profileId !== profileId
    ).map((i, index) => {
        i.order = index;
        return i;
    });

    await update({ 
        id, 
        payload: squadData,
        merge: false,
    });

    // Remove associations in Profiles
    return true;
}
