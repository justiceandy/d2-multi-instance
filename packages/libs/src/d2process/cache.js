/*
    Module Handles Managing a small runtime cache for service
    - written as async incase we switch to a real cache provider
*/
import { account } from "../settings";
import NodeCache from 'node-cache';

const existing = new NodeCache( { stdTTL: 0, checkperiod: 0 } );

export async function list() {
    const keyList = existing.keys();
    return existing.mget(keyList);
}

export async function get(pid) {
    const pidInfo = existing.get(pid);
    return pidInfo;
}

export async function update(procs) {
    return procs.length ? existing.mset(procs.running.map(i => {
        return { key: i.pid, val: i }
    })) : null
}

export async function updateTokens({ pid, name, tokens }) {
    const payload = existing.get(pid);
          payload.tokens = tokens;
          payload.tokenRefreshTime = new Date();

    existing.set(pid, payload);

    // Call Update Account Function with Tokens
    const stored = await account.update({
        name,
        tokens,
    });
    return true;    
}

export async function updateLaunchOrder({ pid, name, order }) {
    const payload = existing.get(pid);
          payload.launchOrder = order;
          payload.launchTime = new Date();
          existing.set(pid, payload);
    
    // Call Update Account Function with Tokens
    const stored = await account.update({
        name,
        tokens,
    });
    return true;    
}

// List Launch Order
export async function listLaunchOrder({ pid, name, order }) {
    const payload = existing.get(pid);
          payload.launchOrder = order;
          payload.launchTime = new Date();
          existing.set(pid, payload);
    
    // Call Update Account Function with Tokens
    const stored = await account.update({
        name,
        tokens,
    });
    return true;    
}

export async function getNextRefreshToken({ pid, name, order }) {
    const procs = await list();
    if(!procs.length) return null;
    let oldest = procs[0];
    procs.map(i => {
        const thisTokenTime = i.tokenRefreshTime.getTime();
        const oldestTokenTime = oldest.tokenRefreshTime.getTime();
        oldest =  thisTokenTime <  oldestTokenTime ? i : oldest;
    })
    return oldest;
}

export default {
    get,
    list,
    update,
    updateTokens,
    updateLaunchOrder,
}