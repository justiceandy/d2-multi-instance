import { getOldestToken } from "../libs/settings/account";
/*
    Module Handles Key Rotation
*/
export default async (args) => {
    
    const oldest = await getOldestToken();

    console.log(oldest)
}
  
