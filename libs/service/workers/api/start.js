import api from "../../../api";

export default async function ({ config }) {
    console.log('Worker 3:', 'Express API')
    await api.start(config.api.port);
}