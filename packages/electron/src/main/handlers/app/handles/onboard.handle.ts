// @ts-nocheck

export default async (event:any, args:any) => {
    console.log('Onboard Submitted to Main Proc', args);
    return {
        args
    }
}