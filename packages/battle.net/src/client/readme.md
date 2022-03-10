### Battle.net Client Configuration
Manages modifications to `%UserProfile%\Saved Games\Diablo II Resurrected\Settings.json` to support Client Settings per Account Profile.

### Methods
| Type      | Description |
| ----------- | ----------- |
| Get      | Get Current Client Settings for D2R |
| Update   | Update Client Settings File for D2R |


### Presets
| Type      | Description |
| ----------- | ----------- |
| low      | Lowest Visual / Resource Requirements |
| medium   | Medium Visual / Resource Requirements |
| high   | High Visual / Resource Requirements |
| ultra   | Highest Visual / Resource Requirements |

### Note about Defaults
These may not be perfectly optimized. If you have a preset that you feel should be included by default or changes could be made to `low` that could result and less resource usage.

Medium/High/Ultra are opinionated presets.


### Custom Presets
Custom presets are supported. By default only the above presets will be available at installation time. A user can modify any of the default presets and assign those changes to a `custom` preset.

Storage and CRUD API for Custom Presets is available through the [level-db/presets](packages/level-db/src/presets) package.
