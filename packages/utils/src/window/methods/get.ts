import { Window, windowManager } from 'node-window-manager';

export const listWindows = async () => {
    windowManager.requestAccessibility();
    const windows = windowManager.getWindows();
    return windows;
}

export const listWindowsByPid = async (processId:string) => {
    const windows = await listWindows();
    return windows.filter(window => window.processId === parseInt(processId));
}

export interface WindowsTitleOptions {
    title: string
    all?: boolean
}

export const listWindowsByTitle = async (title:string) => {
    const windows = await listWindows();
    const results : { window: Window, title: string }[] = [];
    if(!windows.length) return [];
    const filterable : void[] = windows.map(window => {
        results.push({
            window,
            title: window.getTitle()
        })
    });
    return results.filter(i => i.title === title);
}

export const getWindowByTitle = async (title:string) => {
    const windows = await listWindowsByTitle(title);
    if(!windows.length) return null;
    const result : Window =  windows[0].window;
    return result
}


export const getWindowByPid = async (processId:string) => {
    const windows = await listWindowsByPid(processId);
    if(!windows.length) return null;
    const result : Window =  windows[0];
    return result
}
