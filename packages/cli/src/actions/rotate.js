import { getOldestToken } from "@d2r/libs/dist/settings/account";
/*
    Module Handles Key Rotation
*/
export default async (args) => {
    
    const oldest = await getOldestToken();

    console.log(oldest)
}
  
