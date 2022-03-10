# @d2r/level-db
Local Embeded File Storage Library using [levelup](https://github.com/Level/levelup) which is a Node.js wrapper for [levelDB](https://github.com/google/leveldb) compliant datastores. 

## Purpose
This library is responsible for the Format and Storage of data on client machines.

Each Data Type Includes a Basic CRUD API and exports `TypeGraphQL` Decorated Types to make integration with GraphQL seamless.

## Why LevelDB
LevelDB was chosen because it meets the criteria of being an embeded database that supports rich data types. Since we can use JSON encoding,
we dont need to format data specifically for storage. 

For example, SqlLite would require mapping relational keys just to maintain similiar data format parity with graphQL.

Also check this about [levelDB performance](http://www.lmdb.tech/bench/microbench/benchmark.html).

## D2R Game Data Types
| Type      | Description |
| ----------- | ----------- |
| [Account](./src/libs/account)      | Battle.net Accounts |
| [Profiles](./src/libs/profiles)   | D2R Game Account Runtime Profiles 
| [Characters](./src/libs/characters)   | D2R Game Characters |
| [Stash](./src/libs/stash)   | D2R Game Character Item Stash|
| [D2data](./src/libs/d2data)   | D2R Game Data Extracted from MPQs |
| [Processes](./src/libs/processes)   | D2R Game Process Data |

## D2RMA Internal Storage Types
| Type      | Description |
| ----------- | ----------- |
| [LaunchEvents](./src/libs/launch)   | D2RMA Game CLient Launch Events |
| [Logs](./src/libs/logs)   | D2RMA Application Logs |
| [Machines](./src/libs/machines)   | Machines running D2R Game Clients |
| [Marketplace](./src/libs/marketplace)   | Marketplace Data |
| [Plugins](./src/libs/plugins)   | plugins/integrations installed / featured on marketplace |
| [Preferences](./src/libs/preferences)   | D2RMA General App Preferences |
| [User](./src/libs/user)   | D2RMA User Information |
| [Tokens](./src/libs/tokens)   | Battlenet Auth Tokens |


## Example Data
Example Data is included in `/data`, if initialized in Electron, data is stored in OS Specific `%ApplicationData%`.

You cannot expect this data to persist to a clients install. Use default values for that. 

The only data that persists outside of defaults will be d2 game data extracted from MPQ's.


## Developer Notes
Processes cannot share this database since it is embeded. (Embeded databases run inside the process they are invoked from).

Leveldb is thread safe but uses a file lock on the raw data files. See more about [LevelDB](https://github.com/google/leveldb/blob/master/doc/index.md). 

D2RMA utilizes this library within a GraphQL Server context. We can then share data through resolvers with external processes. 

Here is an [alternative example](https://github.com/Level/multileveldown) using websockets. 

### CLI
A Basic CLI is included to query and inject test scenario data. See [scripts](./src/scripts) for code thats executed.

```
    # Show Account Data
    node ./cli --action list --filter accounts

    # Show All Data
    node ./cli --action list

    # Generate Account Data
    node ./cli --action generate --filter accounts

    # Generate All Example Data
    node ./cli --action generate

    # Clear All Test Data
    node ./cli --action clear

    # Clear Specific Test Data
    node ./cli --action clear --filter accounts

    # Set as Default Install
    node ./cli --action defaultInstall
```

## Log Data
[Winston Log Driver/Transport](./src/libs/logs/drivers) is included. Log Data is stored with time series queries in mind.

## Technical
- [LevelDB](https://github.com/google/leveldb/blob/master/doc/index.md) using [level](https://github.com/Level/level)
- Emits [type-graphql](https://typegraphql.com/) decorated types

## Native Modules
- [keytar](https://www.npmjs.com/package/keytar)
