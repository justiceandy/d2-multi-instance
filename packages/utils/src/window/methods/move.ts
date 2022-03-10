import { getWindowByTitle, getWindowByPid } from '..';
import { Monitor } from 'node-window-manager/dist/classes/monitor';
import { IRectangle } from 'node-window-manager/dist/interfaces';

export interface MoveWindowOptions {
    title: string
    bounds: IRectangle
    monitor?: Monitor
}

export const moveWindowByTitle = async (args:MoveWindowOptions) => {
    const { title, bounds, monitor } = args;
    const titleWindow = await getWindowByTitle(title);
    if(!titleWindow) return null;

    const currentBounds = titleWindow.getBounds();
    const currentMonitor = titleWindow.getMonitor();

    // const currentMonitorScale = currentMonitor.getScaleFactor();
    const destinationMonitor = monitor || currentMonitor;
    const destinationBounds = bounds;

    titleWindow.setBounds(destinationBounds);
    return true;
}

export interface GetWindowBounds {
    type: 'pid' | 'title'
    title?: string
    pid?: string
}

export const getWindowBounds = async (args:GetWindowBounds) => {
    const { type, title, pid } = args;

    let selectedWindow = null;

    if(args.type === 'title' && title) 
        selectedWindow = await getWindowByTitle(title);
    
    if(args.type === 'pid' && pid)
        selectedWindow = await getWindowByPid(pid);
 
    if(!selectedWindow) return null;

    return {
        ...selectedWindow,
        monitor: selectedWindow.getMonitor(),
        bounds: selectedWindow.getBounds(),
    }
}
