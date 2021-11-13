
import { notifications } from '../libs';

export default async (args) => {
    
    const notif = await notifications.send({
        title: "Test",
        message: "Test Message"
    });

    return true;
}
  
