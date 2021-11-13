/*
    Module Handles Managing a small runtime cache for service
    - written as async incase we switch to a real cache provider
*/
import { account } from "../settings";

const existing = {};

export async function get() {
    return existing
}

export async function update(procs) {
    return true;
}

export async function updateTokens({ pid, name, tokens }) {
    existing[pid].tokens = tokens;
    // Call Update Account Function with Tokens
    const stored = await account.update({
        name,
        tokens,
    });
    return true;    
}

export default {
    get,
    update,
    updateTokens,
}