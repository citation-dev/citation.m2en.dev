# Ping.

Returns the response time of each Rest request and GatewayAPI for the active session to which citation is connected in `/ping`.

---

- Note that any response time displayed by this command will be rough and not exact.
- GatewayAPI Response Time
  - Time it took Discord to respond to the last heartbeat (in milliseconds)
  - Approximate WebSocket ping for the citation session at the time the command was executed.
- Rest request response time
  - The time (in milliseconds) it took for Discord to respond to the Rest request.
  - This is the time taken by the Discord API to request the client user that the citation is currently connected to, and the response to that request.

::: tip If you feel that citation is not responding well

Check the **API Response Time** in [Discord Status](https://discordstatus.com/).

If the value is high, it may not only mean that the citation response is bad, but also that the Discord API server response is bad. Please check the latest information.

:::
