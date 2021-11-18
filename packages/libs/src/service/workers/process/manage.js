 import { d2process } from "../../..";
 import registry from "../../../registry/battle-net";
 import killHandler from "@d2r/cli/dist/actions/kill";
 
 // Manage Running Processes
export default async () => {
    const processes = await d2process.list();

    // If we have a single new process, this service was running first
    if(processes.status.new.length === 1) {
        
        // Current Registry Keys will be for this Account
        // We can track account from ID since web token will change
        const newProcess = processes.status.new.pop();
        const keys = await registry.get();
        const webTokenKeyName = `${registry.keys.osi.type}\\${registry.keys.osi.name.replaceAll('/', '\\')}`;

        const stored = await registry.store({ 
            pid: newProcess.pid,
            account: {
                name: newProcess.name,
                folder: newProcess.folder,
                tokenTime: parseInt(newProcess.tokens['ACCOUNT_TS']),
            },
            keys: keys[webTokenKeyName].values,
        });
        
        const killedProcess = await killHandler({ silent: true });
    }
    // If we have multiple new processes, service was started after a clients, lets try to recover
    if(processes.status.new.length > 1) {

    }
    // if we have an non existing process
    if(processes.status.missing.length) {

    }

    return true;
}