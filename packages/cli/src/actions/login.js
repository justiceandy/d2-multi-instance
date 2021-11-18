import { settings } from '@d2r/libs';
const { login } = settings.account;
/*
    Module Handles Logging into Bnet
*/
export default async (args) => {
    await login({ username: 'test', password: 'password' });
    console.log('After')
}
  
