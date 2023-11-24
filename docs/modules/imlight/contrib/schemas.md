# Schemas
Below is a list of mechanisms Imlight employs that doesn't quite have enough substance to warrant it's own document.

## Server Protocols
Like DML [protocols](../internals/systems/dml/protocols.md), Imlight has it's own set of internal protocols known as `IServerProtocol`. These protocols follow the same schema as the game client protocols for consistency sake.

## ReceiveProtocolDispatcher
The `ReceiveProtocolDispatcher` class is an abstraction for the [actor model](./index.md#actor-model) that allows for message handlers in a class to instead be identified using C# attributes.

For example:
```csharp
[MessageHandler(typeof(LOGIN_7_PROTOCOL.MSG_DELETECHARACTER))]
private void ReceiveDeleteCharacter(LOGIN_7_PROTOCOL.MSG_DELETECHARACTER message) {
    // Do work here
}
```
__Figure A.I__ -- An example of a class method that derives from `ReceiveProtocolDispatcher`.