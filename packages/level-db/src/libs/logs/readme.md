## Logs
Data Store for Application Logs in DRMA

### Type Definitons
- [Log](./types/Log.ts)

### Date Ranges
In order to support date ranges, uuid date format is used for uniqueIds.

This allows easy filtering of a date range without looping the whole sublevel.

### CRUD Methods
| method      | Description |
| ----------- | ----------- |
| create      | Create new Log Record |
| get   | Get Log Records By Filter Criteria |
| list   | List All Log Records |
| purge   |  Delete Records by Filter Criteria |


### Log Drivers
Winston is currently the only supported Log Driver.
