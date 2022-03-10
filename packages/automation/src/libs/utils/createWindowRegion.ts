import { Region } from "@nut-tree/nut-js";

/**
 * {@link createWindowRegion} Returns a Nut.js Compatible Region from
 * a Window Bounds
 * @param window Window Object from node-window-manager
 * @returns 
 */
export const createWindowRegion = async (window:any) => {

    const launcherBounds = window.getBounds();
    const bounds = {
        left: <number> launcherBounds.x || 0, 
        top: <number> launcherBounds.y || 0,  
        width: <number> launcherBounds.width || 0, 
        height: <number> launcherBounds.height || 0,
    }
    return {
        bounds,
        region: new Region(
            bounds.left,
            bounds.top,
            bounds.width,
            bounds.height,
        )
    }
}
