### UI Automation Library
This package supports OCR UI Automation for managing Logins and Squad Lobbies.

This is not designed to be a bot tool, this just allows D2RMA to login to the game unassisted.

### About
Package uses [Nut.js](https://nutjs.dev/) for UI Automation.

[OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) is notoriously bad, but this allows us to manage the game without injection. While D2RMA might use injected DLL's in the future, these will always be optional.

We are able to send specific events to D2R.exe without injection, (Key Inputs) and support for that is provided by the [Utils](packages\utils\src\window) Library. This package focuses on interactions where Interface Items need to be clicked or UI Interaction is specifically required.

### Example Scenario
Lets Take 'Exit Current Game' as a scenario, We simply want to log out and enter the lobby screen.

We can send the keypress events to navigate from 'In-Game' to 'Character-Select'. But there are no keybinds to navigate from 'Character-Select' to 'Lobby'. You need to specifically click on the Lobby Button. This library aims to solve that problem.

### Function List
- Login (Battle.net Launcher)
- LobbyManager (D2R.exe)

### Features
- Color Picker Support
- Custom Speed Throttling
- HDR Support (50%)

### Cons
- Takes over User Input 
    * Interaction Events that require Mouse clicks will Take control of the Mouse.
    * Events that require a Window to be active will bring it into focus
- No Multi Monitor Support 
    * Logins will need to happen on Primary Monitor before being moved.
    * Image Scanning Events will not occur on Extra Monitors. (Lobby Watcher)
