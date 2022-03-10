import Queue from 'promise-queue';

/*
    Module is essentially a wrapper for promise-queue
*/
export interface CreateQueArgs {
    name: 'registry' | 'process';
    concurrency?: number
    max?: number
}

type AppQue = {
    [key: string]:  Queue
}

let appQues : AppQue = {};

export const create = ({ name, concurrency, max }: CreateQueArgs) => {
    const defaults = {
        concurrency: 1,
        max: Infinity,
    };
    appQues[name] = new Queue(
        concurrency || defaults.concurrency, 
        max || defaults.max,
    );
    return appQues[name];
}

export const add = async ({ name, promise }:any) => {
    if(!appQues[name]) create({ name });
    return appQues[name].add(promise)
}

export const isPending = async (name:string) => {
    return appQues[name].getPendingLength() > 0
}

export const get = async (name:string) => {
    return appQues[name];
}

export const getAll = async () => {
    return appQues;
}
