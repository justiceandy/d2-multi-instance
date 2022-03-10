import { createProfileArgs } from "./create";

export const defaults = (attributes:createProfileArgs) => ({
    host: {
        ip: 'localhost'
    },
    battlenet: {
        region: "US",
        account: "",
        local: "EN",
        automated: true,
        offlineOnly: false,
    },
    window: {
        fancyZones: {
            enabled: false,
        }
    },
    hotkey: {
        enabled: false,
        modifier: null,
        key: null,
    },
})
