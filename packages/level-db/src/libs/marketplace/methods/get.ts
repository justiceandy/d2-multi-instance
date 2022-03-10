import { Store } from '@d2r/level-db'
import { Marketplace } from '@d2r/level-db/types';

/**
 * {@link get} Get D2RMA Marketplace Data
 * @returns Marketplace 
 */
export const get = async () => {
    const { MarketplaceDB } = await Store({});
    // Defaults
    const result = {
        marketplace: {
            enabled: true,
            version: '1.0.0',
            plugins: [],
        }
    };
    // Override Defaults
    /* @ts-expect-error */
    for await (const [key, value] of MarketplaceDB.iterator()) {
        const prefKey = key as keyof Marketplace;
        const newPrefs : Partial<Marketplace> = {};
        newPrefs[prefKey as keyof Marketplace] = value;
        result.marketplace = Object.assign({}, result.marketplace, newPrefs);
    }
    return result.marketplace;
}
 