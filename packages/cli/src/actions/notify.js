
import { notifications } from '@d2r/libs';

export default async (args) => {
    
    const notif = await notifications.send({
        title: "Test",
        message: "Test Message"
    });

    return true;
}
  
