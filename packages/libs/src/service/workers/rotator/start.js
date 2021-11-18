import rotateToken from "../../../settings/account/rotateToken";

export default function () {
    const timer = 30;
    const waitTime = timer * 60 * 1000;
    console.log('Worker 4:', `Key Rotator - ${timer}m`)
    //setInterval(rotateToken, waitTime);
}