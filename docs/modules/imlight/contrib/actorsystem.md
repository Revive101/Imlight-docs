# Actor Model
The actor model, a concurrent computing model, is the central idea of Imlight.

An "actor," or self-contained, enclosed object that contains its own state and behaviors, is the basic computational unit in the actor model. Each actor is an instance of an object in the context of C# and Imlight.

Immutable messages are used by actors to communicate, and messages are processed sequentially and in FIFO order by each actor. 

You send messages in lieu of calling methods. A message can be sent from one actor to another via _tell_, a transmitter that is fire-and-forget. Conversely, in a situation when the recipient is expected to respond to the caller, an actor may _ask_ for a reply.

Every actor must exist as the child of another actor. This parent actor is known as a supervisor to all of its children. When an exception is thrown from an actor, the actor's supervisor is responsible for managing the outcome.

## Imlight's Actor System
Imlight's director creates the Imlight actor system.

There are then two child actors of the system itself: `Login` and `Patch`.