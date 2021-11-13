### Running as a Service
This CLI supports being run a service while listening to windows registry and window events for d2. This can add some background system overhead. However this is the most convient way to run the application until electron interface is added.

### Running
- Navigate to Project Directory in Terminal
- Run `npm run service`
- Service will now be started with 2 Worker Nodes

### Service Overview
Since listening for Registry and Process changes for D2 is blocking, 2 worker nodes are spun up alongside the main process using Node's internal [Cluster](https://nodejs.org/api/cluster.html) API.

### API Endpoints
Basic endpoints are available. Default Port is 3000 but that can be changed in setup config.


| Endpoints | Description |
| --- | ----------- |
| `/accounts` | List Running D2 Processes w/ Associated Accounts |
| `/process` | Attempt to Multi Instance Process Handler |
| `/settings` | Setup and Initialize  |

ie. `http://127.0.0.1:3000/accounts`

Currently doesnt support modifications, its just for debugging.

### Platform Support
Currently this only works on Windows. PR's are welcome by any Mac gamers :). The current functionality uses win32api for system events.

