### Battle Net Tokens
Registry Keys are used to authenticate with Battle.net Servers. Here are the Keys being watched for by this application.


![Example](../assets/reg-keys.png)


On changes, the background service is notified and saves the short hash of the auth token to disk inside `./settings.json`. This allows us to quickly verify and associate the token to an account aswell as check for new tokens on refresh.

 A full copy of the auth token, stored in the root of each game folder as a Base64 encoded JSON string, `multi-launcher-auth.bin`.

The inject action will grab this token from the game folder and push it to the registry. This allows us to not have to login to bnet for each run of the application.

Note: These tokens are not enough to impersonate.

### Refreshing Tokens
Whenever the background process recieves an update from the registry, it will save that token. However, there are some scenarios where an accounts token can time out.

ie. I have 5 accounts running and only the account currently injected into the registry is refreshed. We may have a refresh event for other accounts but cannot capture it because only 1 account can exist in the registry at a time.

To solve this problem, the background process will attempt to cycle the oldest token. This hack doesnt work all the time because these refresh times are very inconsistent. 

### Swapping Regions
Currently not supported. Coming Soon.