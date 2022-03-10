// @ts-nocheck
import { settings } from '@d2r/libs';

export default async ({ accounts, preferences }) => {
    await settings.account.AccountStore.set({ accounts });
    await settings.preferences.PreferenceStore.set(preferences);
    return {
        accounts,
        preferences,
    }
}
