// @ts-nocheck
import { app } from 'electron';

export default async (event:any, args:any) => {
    return {
        version: app.getVersion()
    }
}