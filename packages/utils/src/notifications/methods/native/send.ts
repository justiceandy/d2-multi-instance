/*
    Module Handles sending Native Windows Notifications
*/
import { WindowsToaster } from 'node-notifier';

export default async (msg:any) => {
    const notifier = new WindowsToaster({
        withFallback: true
    });
    const defaults = {
        title: 'Example',
        message: 'Example',
        id: 1,
        appId: 124,
        // install: 'C:\\Users\\Diablo2\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\D2RL\\0.0.1\\SnoreToast.lnk"',
        extra: 'Test',
        icon: `file:///${__dirname}/../../../assets/d2-small.png`, // Absolute path (doesn't work on balloons)
        sound: false, // Notification.IM 
        actions: ['Ok', 'Cancel'],
        reply: true,
    };
    const payload = Object.assign({}, defaults, msg);
    const notification = await notifier.notify(payload);
    return notification;
}
