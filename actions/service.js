/*
    Module Handles running the CLI as a service
        - Sets Registry/Active Window Event Hooks
        - Uses Cluster to make Hooks non blocking
*/
import service from "../libs/service";

export default async (args) => {
    
    await service.cluster(args);
    
    return true;
}
  
