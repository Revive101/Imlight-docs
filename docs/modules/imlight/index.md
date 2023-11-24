# Imlight

__Imlight__ is the focal point of Revive101's endeavours. It is the internal name for the private server. It is the game, login, and patch server.

## Imlight Parts
There are three primary modules to Imlight:
* __Common__: A library of commonly used parts.
* __CoreLib__: The central hub of traffic, and the actual server. This is just a library and cannot run on its own.
* __Director__: Given a library of multiple parts and running gears, the _director_ is responsible for starting and managing those gears in a convenient order.