import fs from 'fs'
import request from 'request'
import StreamZip from 'node-stream-zip'

export const unzipUrl = async ({ url, dest, name }:any) => {
  const zipFileLoc = `${dest}/${name}`;
  return request(url)
    .pipe(fs.createWriteStream(zipFileLoc))
    .on('close', async () => {
      const zip = new StreamZip.async({ file: zipFileLoc });
      const stm = await zip.stream('handle64.exe');
      stm.pipe(fs.createWriteStream(`${dest}/handle64.exe`));
      stm.on('end', () => zip.close());
    });
}
 