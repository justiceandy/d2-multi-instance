import { Store } from '@d2r/level-db'

/**
 * {@link clear} Remove all Stored Marketplace Data
 * @returns boolean
 */
export const clear = async () => {
    const { MarketplaceDB } = await Store();
    await MarketplaceDB.clear();
    return true;
}
 