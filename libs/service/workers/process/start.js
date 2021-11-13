import manage from "./manage";

export default function () {
    console.log('Worker 1:', 'Process Watch')
    setInterval(manage, 5000);
    // await d2process.setEventHook()
}