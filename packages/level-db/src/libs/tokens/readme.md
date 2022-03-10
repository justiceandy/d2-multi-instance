## Account 
Data Store for Battle.net Authentication Tokens

## Token Storage Info
Since D2R Auth tokens are stored as Binary Data in the windows registry, we want to store both the full value incase we need to inject this token aswell as a value that we can compare against previously seen tokens. 

To help with sorting, we convert the binary keys to a Byte Array and hash it using the [shorthash2](https://www.npmjs.com/package/shorthash2) library.

This is done by the [battle.net](/packages/battle.net) library.


### Type Definitons
- [Token](./types/Token.ts)

### CRUD Methods
| method      | Description |
| ----------- | ----------- |
| create      | Create new Token Record |
| deleteById   | Delete Token Record |
| get   | Get Token Records By Filter Criteria |
| list   | List All Auth Token Record |
| update   |  Update Auth Token Record |
| purge   |  Remove No longer used auth tokens |
