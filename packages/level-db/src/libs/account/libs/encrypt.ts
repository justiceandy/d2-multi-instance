import keyTar from 'keytar';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

const defaultAppSalt = 'D2RMA';

const generateVaultKey = () => Buffer.from(uuidv4()).toString('base64');

const generateCipherKey = async (vaultKey: string) => <Promise<Buffer>> new Promise((resolve, reject) => {
    crypto.scrypt(vaultKey, defaultAppSalt, 32, (err, key) => {
        if(err) reject(err)
        resolve(key);
    });
});

const cryptOptions = {
    algorithm: 'aes-256-ctr',
    ivLength: 16,
}

/**
 * {@link encrypt} Encrypt String using Global Vault Key
 * @param text 
 */
export const encrypt = async (text:string) => {
    const { algorithm, ivLength } = cryptOptions;
    const vaultKey = await getGlobalVaultKey();
    const key = await generateCipherKey(vaultKey);
    const iv = crypto.randomBytes(ivLength);
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

/**
 * {@link decrypt} Decrypt String using Global Vault Key
 * @param text String to Decrypt
 */
export const decrypt = async (text:any) =>  {
    const { algorithm } = cryptOptions;
    const vaultKey = await getGlobalVaultKey();
    const key = await generateCipherKey(vaultKey);
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}

/**
 * {@link setGlobalVaultKey} Store Encryption key in Windows Vault
 * @param key String to Store
 */
export const setGlobalVaultKey = async (key:string) =>  {
    const stored = await keyTar.setPassword('D2RMA', 'global', key)
    return stored;
}

/**
 * {@link getGlobalVaultKey} Get Encryption key from Windows Vault
 * 
 * If Global Key is not found, Generate it and Store. 
 * @return key
 */
export const getGlobalVaultKey = async () =>  {
    let result = generateVaultKey();
    const password = await keyTar.getPassword('D2RMA', 'global');
    if(!password) await setGlobalVaultKey(result);
    else result = password;
    return result;
}


