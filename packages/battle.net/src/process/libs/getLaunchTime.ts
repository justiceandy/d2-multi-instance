import child_process from 'child_process';
import util from 'util';
import moment from 'moment';
/*@ts-ignore-error */
import { getDateFromWMIDate } from 'wmi-datetime';
/*
    Module Gets Process Start Time w/ WMIC
*/
export const getLaunchTime = async (processId:string) => {
    const command = `wmic process where ProcessID="${processId}" get CreationDate`;
    const exec = util.promisify(child_process.exec);
    const createTime = await exec(command, {'shell':'powershell.exe'})
    const trimmed = createTime.stdout
        .replace('CreationDate', '')
        /*@ts-ignore-error */
        .replaceAll('\n', '')
        .replaceAll('\r', '')
        .replaceAll(' ', '')

    const dateParsed = moment(getDateFromWMIDate(trimmed));
    return dateParsed;
}
