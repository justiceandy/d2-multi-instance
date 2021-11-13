import fstream from 'fs'

export default async function ({ src, dest}) {
    const readStream = fs.createReadStream(src);
    const writeStream = fstream.Writer(dest);
     
    const stream = readStream
      .pipe(unzip.Parse())
      .pipe(writeStream);

    return { src, dest, status: true };
}
