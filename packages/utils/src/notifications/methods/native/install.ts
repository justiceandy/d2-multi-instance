/*
    Module Handles Installing Snooze Toaster with a custom App Id
    - https://github.com/mikaelbr/node-notifier
*/
import { WindowsToaster } from 'node-notifier';

export default async (msg:any) => {
    const notifier = new WindowsToaster({
        withFallback: true
    });
    const defaults = {
        appId: 124,
        install: 'C:\\Users\\Diablo2\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\D2RL\\0.0.1\\SnoreToast.lnk',
    };
    const payload = Object.assign({}, defaults, msg);
    const notification = await notifier.notify(payload);
    return notification;
}
