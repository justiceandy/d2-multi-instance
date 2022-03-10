import { getWindowByPid, getWindowByTitle } from '..';

export const showWindowByPid = async (processId:string) => {
    const pidWindow = await getWindowByPid(processId);
    if(!pidWindow) return null;
    pidWindow.bringToTop();
    return true;
}

export const showWindowByTitle = async (title:string) => {
    const titleWindow = await getWindowByTitle(title);
    if(!titleWindow) return null;
    titleWindow.bringToTop();
    return true;
}
