/*
    Module Handles Replacing all pixels in an image of 'old' color to 'new' color 
    - Used in Automation Library for Custom RGB Values

*/
/*@ts-ignore-error */
import jimpColor from 'replace-color';
import jimp from 'jimp';

import fs from 'fs/promises';

export interface ReplaceLocalArgs {
    imageName: string
    targetColor: string
    sourceColor: string
    sourcePath: string
    outputPath: string
    type: string
}
const defaults : Partial<ReplaceLocalArgs> = {
    imageName: 'watermark.jpg',
    targetColor: '#66AE74',
    sourceColor: '#63A4FF',
    sourcePath: `${__dirname}/generated`,
    outputPath:  `${__dirname}/generated`,
    type: 'hex', 
}

/*
    Replace Hex Color in Image with another color value
*/
export const replaceLocalImage = async (args?: ReplaceLocalArgs) => { 
    const {
        imageName,
        targetColor,
        sourceColor,
        sourcePath,
        outputPath,
        type,
    } = Object.assign({}, defaults, args || {} )
    
    const replaced = await replaceColorObject(args)
   
    replaced.write(`${outputPath}/${imageName}`, (err:any) => {
        if (err) return console.log(err)
    })
    return true;
}

/* 
    Replace All Image Files in Directory w/ Color 
*/
export const replaceFolderImages = async ({
    targetColor = '#66AE74',
    sourceColor = '#63A4FF',
    sourcePath = `${__dirname}/generated`,
    outputPath =  `${__dirname}/generated`,
    type = 'hex',
}) => {
    const dirFiles = await fs.readdir(sourcePath);
    const updatedFiles = await Promise.all(dirFiles.map(
        i => replaceLocalImage({
            imageName: i,
            targetColor,
            sourcePath,
            sourceColor,
            outputPath,
            type,
        })
    ))
    return {
        images: dirFiles,
        updated: updatedFiles,
    };
}

/*
    Returns a Jimp Object with Replaced Color
    - This can be converted to a buffer
*/
export const replaceColorObject = async (args?: ReplaceLocalArgs) => { 
    const {
        imageName,
        targetColor,
        sourceColor,
        sourcePath,
        type,
    } = Object.assign({}, defaults, args || {} )
    const replaced = await jimpColor({
        image: `${sourcePath}/${imageName}`,
        colors: {
          type,
          targetColor,
          sourceColor,
        },
        deltaE: 10
    });
    return replaced;
}
