
export type ClientConfig = {
    Version?: any,
    Toasts?: any,
    GaClientId?: string,
    SavedAccountNames?: string,
    AppearOffline?: {
      LastNotificationMS: string,
      IsNotificationSeen: string,
      IsNotificationLongCheckDelaySetting: string
    },
    GameSearch?: { PerformedSearch: string },
    AutoLogin?: string,
    SingleInstance?: string,
    GameLaunchWindowBehavior?: string
}
