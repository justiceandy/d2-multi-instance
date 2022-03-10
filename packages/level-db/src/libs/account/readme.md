## Account 
Data Store for Battle.net Game Account Information


### Type Definitons
- [Account](./types/Account.ts)


### CRUD Methods
| method      | Description |
| ----------- | ----------- |
| create      | Create new Account Record |
| deleteById   | Delete Account Record |
| get   | Get Account Records By Filter Criteria |
| getPassword   | Get Accounts Raw Password |
| setPassword   | Set an Accounts Raw Password |
| list   | List All Account Record |
| update   |  Update Account Record |


### Password Encryption
By Default, a `Global Encryption String` is stored in the Windows Credential Vault for D2RMA via [KeyTar](https://www.npmjs.com/package/keytar). 

This `Global Encryption String` is used to encrypt/decrypt Account Passwords.

This string is a Unique ID thats created on first launch, it is never returned by the graphQL API and is only used internally by this library. 

Passwords are encrypted with `aes-256-ctr` and stored alongside their [IV](https://en.wikipedia.org/wiki/Initialization_vector) in levelDB. These values are availble via GraphQL but again, you will need the Global Token from the credential vault to decrypt.

List and Get Crud Methods will always return the encrypted password. Since we only need this during automation, a seperate call is used to fetch this password.

While not preventing all attack vectors, this method should prevent leaking passwords unintentionally. Whether through database file sharing or 3rd Party Plugins. As an open source project, feel free to contribute if you feel security can be enhanced without sacrificing user experience. 

### Additional Notes
Storing Passwords should be a last resort. Battle.net SessionID's support a pre-authenticated login flow. In most cases, Passwords are not used unless Pre-Authentication Fails. 

### Encryption Tools
- [KeyTar](https://www.npmjs.com/package/keytar)
- [Initialization Vectors](https://en.wikipedia.org/wiki/Initialization_vector)
- [CreateCipherIV](https://www.geeksforgeeks.org/node-js-crypto-createcipheriv-method/)
- [AES Encryption Methods](https://www.highgo.ca/2019/08/08/the-difference-in-five-modes-in-the-aes-encryption-algorithm/)


### Todo
[] - Research PBKDF2 w/ HWID for Global Key
