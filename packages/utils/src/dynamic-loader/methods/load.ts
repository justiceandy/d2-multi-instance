import glob from 'glob-promise';

export interface LoadPluginOptions {
    directory: string
}
export const load = async (args:LoadPluginOptions) => {
    const { directory } = args;
    const Plugins : any = {};
    const pluginFiles = await glob(`${directory}/*.js`);
    pluginFiles.forEach((file:string) => {
        var plugin = require(file);
        Plugins[plugin.name] = plugin;
    });
    return Plugins;
}
    