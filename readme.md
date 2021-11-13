### D2 Multi Instance Launcher
Note: This project is still not ready for a GA release. Tread Carefully.

### Overview
Diablo 2 Resurrected has a handler method to detect if multiple instances are running on 1 pc. This project exists to disable that functionality and allow multiple instances to run. Also includes some QOL things when run as a background service. It does not support sending multiple key inputs like IsoBoxer. Its currently unclear on Blizzards stance on this.

Note: This project only works on windows. Its not practical multiboxing on other platforms.

### Table of Contents
- [Setup](./docs/setup.md)
- [Game Files](./docs/game-files.md)
- [Usage](./docs/usage.md)
- [Running as a Service](./docs/service.md)
- [Game Windows](./docs/game-windows.md)
- [Under the Hood](./docs/under-the-hood.md)
- [Bnet Tokens](./docs/bnet-tokens.md)

### CLI Commands
| Action | Description |
| --- | ----------- |
| list | List Running D2 Processes w/ Associated Accounts |
| kill | Attempt to Multi Instance Process Handler |
| setup | Setup and Initialize  |
| shortcuts | Regenerate Application Shortcuts |
| service | Run Instance Manager as Background Service |
| inject | Inject a saved accounts auth token into registry |

### Project Assumptions
- Each Instance of Diablo is required to have its own directory. See [Game Files]()
- Login for Bnet will still be handled manually

### Dependencies
- [Node.js 15+](https://nodejs.org/en/)
- [Handle](https://docs.microsoft.com/en-us/sysinternals/downloads/handle)
- [Snoretoast](https://github.com/KDE/snoretoast) 


### Handle64
By usage of this application you are agreeing to the handle [TOS](https://docs.microsoft.com/en-us/sysinternals/license-terms). The installer script accepts this eula for you.


### Whats different from D2RML
Sunblood has a great project for this that uses AutoIt to support multiple accounts. its well suited for automated login and heavily inspired this repository.

This project just has a different approach to the workflow, includes some nice QoL features but essentially does the same thing.

Checkout his project [here](https://github.com/Sunblood/D2RML). 