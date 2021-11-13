import { settings, shortcuts } from '../libs';
import { login } from '../libs/settings/account';
/*
    Module Handles Logging into Bnet
*/
export default async (args) => {
    await login({ username: 'test', password: 'password' });
    console.log('After')
}
  
