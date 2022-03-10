## Launch Events
Data Store for Launch Event for Battle.net Processes

### Type Definitons
- [Account](./types/Account.ts)

### Why Do We Store These
Launch events allow us to determine a timestamp of when an account's auth token may be refreshed.

For example, token refresh events happen during the sign in process aswell as every 2 hours. If we have multiple accounts running, we need a reference point of which account the refreshed auth tokens are associated with.

If an account has been launched recently, the first 2 refreshed tokens are likely to be because of the sign in process. The Handler that listens for background token refresh's needs to know to skip these events.

For More information on Token Refresh Events check out the [Battle.net](/packages/battle.net) package.

### CRUD Methods
| method      | Description |
| ----------- | ----------- |
| create      | Create new Launch Event Record |
| deleteById   | Delete Launch Event Record |
| get   | Get Launch Event By Filter Criteria |
| list   | List Launch Event Records |
| update   |  Update Launch Event Record |
| prune   |  Remove Events older than 24 hours |
