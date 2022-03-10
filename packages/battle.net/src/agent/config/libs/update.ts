import fs from 'fs/promises';
import { ConfigFileOptions, ConfigFileDefaults } from './get';

export interface UpdateConfigOptions extends ConfigFileOptions {
    config: object
    dry?: boolean
}
const defaults : Partial<UpdateConfigOptions> = {
    ...ConfigFileDefaults,
    dry: false,
};
export const update = async (args?:UpdateConfigOptions) => {
    const params : UpdateConfigOptions = Object.assign({}, defaults, args);
    const { dir, account, fileName, config, dry } = params;

    const newConfigJson = JSON.stringify(config, null, 2);

    const file = account ?
        `${dir}/${account}.config`
    :   `${dir}/${fileName}`;

    !dry ? await fs.writeFile(file, newConfigJson) : null;

    return {
        dry,
        config,
    };
}
