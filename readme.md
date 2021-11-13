### D2 Multi Instance Launcher
![Example](./assets/d2-yellow-med.jpg)

### Overview
Diablo 2 Resurrected has a handler method to prevent more than 1 copy of the game from running at a time. 

This project exists to disable that functionality and include some QOL things for keeping those accounts authenticated with battle-net. 


It does not support sending multiple key inputs like IsoBoxer. 

Note: This project only works on windows. Its not practical multiboxing on other platforms.


### Table of Contents
- [Setup](./docs/setup.md)
- [Game Files](./docs/game-files.md)
- [Usage](./docs/usage.md)
- [Running as a Service](./docs/service.md)
- [Game Windows](./docs/game-windows.md)
- [Under the Hood](./docs/under-the-hood.md)
- [Battle-net Auth Tokens](./docs/bnet-tokens.md)

### CLI Commands
| Action | Description |
| --- | ----------- |
| list | List Running D2 Processes w/ Associated Accounts |
| kill | Kill any active D2R.exe Multi Instance Check |
| setup | Setup and Initialize  |
| shortcuts | Regenerate Application Shortcuts |
| service | Run Instance Manager as Background Service |
| inject | Inject a saved accounts auth token into registry |

### Project Assumptions
- Each Instance of D2R is required to have its own directory. See [Game Files](./docs/game-files.md)
- Login for Bnet will still be handled manually

### Direct Dependencies
- [Node.js 15+](https://nodejs.org/en/)


### Bundle with Application
- [Handle](https://docs.microsoft.com/en-us/sysinternals/downloads/handle)
- [Snoretoast](https://github.com/KDE/snoretoast) 


### Note About Handle
By usage of this application you are agreeing to the handle [TOS](https://docs.microsoft.com/en-us/sysinternals/license-terms). The installer script accepts this eula for you. Handle, appropriatly named, is used to find the D2R process handler with open Instance Checks.

### Whats different from D2RML
Sunblood has a great project for this that uses AutoIt to support multiple accounts. its well suited for automated login and heavily inspired this repository.

This project just has a different approach to the workflow. The main difference is the background process for managing token refresh.

Checkout his project [here](https://github.com/Sunblood/D2RML). 


### Contributing
All PR's and issues are welcome. See [Contributing](./docs/contributing.md)