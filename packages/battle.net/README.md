# @d2r/battle.net
API for interacting with Local Installation of Battle.net Application.

Note: This API only supports Windows.

## Internal Libraries
| Type      | Description |
| ----------- | ----------- |
| [Agent](./src/agent)     | Methods for interacting with Installed Battle.net Agent |
| [Client](./src/agent)   | Methods for Managing D2R Game Client Settings |
| [Process](./src/process)    | Methods for managing D2R Processes |
| [Registry](./src/registry)    | Methods for extracting Auth Tokens from Windows Registry | 

## Handle64
[Handle64](https://docs.microsoft.com/en-us/sysinternals/downloads/handle) is bundled with this library and used to disable the multi instance check in D2R Processes. This is included in `/bin/`.

By Using this Library you agree to the Handle64 TOS. 

## Electron + Native Modules
- [sqlite3]()
- [sqlite-async]()
- [winreglib]()
- [regedit]()
- [moment]()
- [wmi-datetime]()

Due to this library including native modules, you will need to run `yarn run build-native` to build against the version of node included in your electron application. 
