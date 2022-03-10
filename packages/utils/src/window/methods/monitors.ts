import { Window, windowManager } from 'node-window-manager';

export const listMonitors = async () => {
    windowManager.requestAccessibility();
    const monitors = windowManager.getMonitors();
    return monitors;
}
