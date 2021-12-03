// @ts-nocheck
import { PreferenceStore } from '../../../store/preferences';
import { AccountStore } from '../../../store/accounts'

export default async ({ accounts, preferences }) => {
    await AccountStore.set({ accounts });
    await PreferenceStore.set(preferences);
    return {
        accounts,
        preferences,
    }
}