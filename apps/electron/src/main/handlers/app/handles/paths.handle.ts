// @ts-nocheck
import { app } from 'electron';

export default async () => {
    return {
        appPath: app.getAppPath(),
        installPath: app.getPath("exe"),
        desktop: app.getPath("desktop"),
    };
}