# Message Service
The `MessageService` class is a subsidary of a [session actor](./sessionactor.md) and is responsible for handling the messages a game client (or Imlight) might send.

::: info
Read more about how a `SessionActor` supervises a `MessageService` [here](./sessionactor.md#message-services).
:::

## Creating a New Service
A new service must derive from the `MessageService` class. There are no abstract properties from the base class, but two constructors must be present: one for the class itself, another for Akka.NET.

For example, the `CharacterService` for Imlight:
```csharp
internal class CharacterService : MessageService {
    // Normal constructor. This *must* be public.
    public CharacterService(SessionActor parentActor) : base(parentActor) { }

    // Actor constructor
    protected static Props Props(SessionActor parentActor) {
        return Akka.Actor.Props.Create(() => new CharacterService(parentActor));
    }
}
```
__Figure A.I__ -- Both the normal and actor constructor for `CharacterService`.

::: warning
Note for developers: These two constructors could possibly be removed. Come back to this later.
:::

Once a class exists, it must be added to the set of services defined in the [service factory](./sessionactor.md#gathering-services) of the respective server.

## Message Handlers
`MessageService` derives from the receive protocol [dispatcher](./schemas.md#receiveprotocoldispatcher) meaning that each message handler is denoted with an attribute. See the example on the aforementioned page on how to handle a specific message.

A message handler may be for both an `IMessage` (a message received from the game client) or an `IServerMessage`.

## Methods
The `MessageService` has a few methods for retreiving relevant information.

### SendToSocket
```csharp
protected void SendToSocket(IMessage message)
```

Sends an `IMessage` directly to the game client.

### TellOtherServices
```csharp
protected void TellOtherServices(IServerMessage message)
```

Sends an `IServerMessage` to any other `MessageService` that has a receiver for it.

### AskOtherService
```csharp
protected T AskOtherService<T>(IServerMessage message)
```

Like `TellOtherService()`, but awaits a reply `T`. Timeout of `20` seconds.

### AskServer
```csharp
protected T AskServer<T>(IServerMessage message)
```

Sends the server a message and awaits reply `T`. Does not have a timeout.

### ZoneBroadcast
```csharp
protected void ZoneBroadcast(IMessage originalMessage, bool isSelfless = true)
```

Broadcasts an `IMessage` to the zone the `SessionActor` is in. `isSelfless` marks that the message will _not_ be sent to the player that broadcasted it.

### CloseSession
```csharp
protected void CloseSession()
```

Closes the socket connection and deallocates the `SessionActor` from the server it is connected to.

### GetSocketAccount
```csharp
protected Account GetSocketAccount()
```

Gets the `Account` object associated with the active session. Will return null if one has not been authorized.

### GetActiveCoreObject
```csharp
protected TypeCache.CoreObject GetActiveCoreObject() 
```

Gets the active [core object](../internals/systems/op/coreobject.md) (that is, the actual game object) associated with the current session.

### GetActiveCharacter
```csharp
protected Character GetActiveCharacter()
```

Gets the active `Character` object associated with the active session. Will return null if one has not been authorized.

### OnPreDispose
```csharp
protected virtual void OnPreDispose() 
```

Called just before `Dispose()`. Useful for calling upon resources from other `MessageService`s just before disposing as it is guaranteed that all other services will be active for the request.

### OnDispose
```csharp
protected virtual void OnDispose() 
```

Called as the `SessionActor` is disposing.