### Under the hood
This CLI script interacts with a very easy to find DLL handler. Its adaquetly named, 

```
"\Sessions\1\BaseNamedObjects\DiabloII Check For Other Instances"
```

### Kill Handler Steps
1) Identify what processes have an active matching handler 
2) Kill said process (there will only be 1)
3) Update Application Window with account name
4) Store Auth Tokens in Registry to Disk

### How Injecting Works
Shortcut icons are made to the prefered folder that execute the game with a launcher file specific to that account. 

1) Push Account Tokens into OSI Registry Key
2) Launch D2R

### Refreshing Tokens
Whenever the background process recieves an update from the registry, it will save that token. However, there are some scenarios where an accounts token can time out.

ie. I have 5 accounts running and only the account currently injected into the registry is refreshed. We may have a refresh event for other accounts but cannot capture it because only 1 account can exist in the registry at a time.

To solve this problem, the background process will attempt to cycle the oldest token. This hack doesnt work all the time because these refresh times are very inconsistent. 

### Background Service
See [Service Overview](./service.md) documentation

### Tech Stuff
- ES6 Module w/o Babel 
- Native Modules