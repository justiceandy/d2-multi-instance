// @ts-nocheck
import { d2process } from '@d2r/libs';

export default async () => {
    const result = await d2process.list();
    return result;
}