# Session Actor
The `SessionActor` is the [actor](./index.md#actor-model) representation of a connected socket to Imlight. It's supervisor is the server itself.

## Socket Actions
The `SessionActor`'s primary responsibility is to manage the socket connection it has with it's respective game client. It both receives and sends data to the socket.

When data is received, it is deserialized by the `MessageSerializer` as a potential [magic packet](../internals/systems/kinp/packet-framing.md). Once a magic packet is decoded, it is dispatched to a message handler found in any of the message [services](./messageservice.md).

To send data to the socket, one may use the `SendToSocket()` method found within the `SessionActor`.

## Message Services
The `SessionActor` has a number of child message [service](./messageservice.md) actors. This means that each `MessageService` is supervised by the `SessionActor`.

Because `SessionActor` is unique and dynamic to each connection, every player has a different set of message services and dispatcher. This is what allows Imlight to compute received packets concurrently.

If an exception is thrown from any of the services, the `SessionActor` will break off and drop the connection it has.

Since the `SessionActor` is the supervisor for these services, there are methods in-place for one `MessageService` to speak to another:
* `HandleInternalTell()` -- Fire-and-forget.
* `HandleInternalAsk()` -- Awaits a reply with a timeout of 20 seconds.

There is also an `AskServer()` method, which awaits a reply from the server it is connected to.

::: tip
The `SessionActor` will only dispatch `IMessage` if it received from the socket. 
:::

## Gathering Services
When a `SessionActor` connection is first established, a minimal amount of message [services](./messageservice.md) are granted to the session as per the writing in a [service factory](./servicefactory.md). This means that each `SessionActor` has two different sets of services: one before the session [handshake](../internals/systems/kinp/session.md) is made, and one after.

Each server has its own derived `ServiceFactory` that dictates both set of services.