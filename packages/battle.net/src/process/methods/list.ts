import find from 'find-process';
/*
    Returns running D2 Processes 
*/
export const list = async () => {
    const d2Processes = await find('name', 'D2R.exe');
    return d2Processes;
}
