import api from "../../../api";

export default async function ({ config }) {
    console.log('Worker 3:', `Express API, Port ${config.api.port}`)
    await api.start(config.api.port);
}