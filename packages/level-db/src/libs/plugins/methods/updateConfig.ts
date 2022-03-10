import { Store } from '@d2r/level-db'
import { Plugin } from '@d2r/level-db/types';
import { update } from './update';


export type updateArgs = {
    id: 'string',
    payload: Partial<Plugin>,
}

export const updateConfig = async ({ id, payload }:updateArgs) => {

}
