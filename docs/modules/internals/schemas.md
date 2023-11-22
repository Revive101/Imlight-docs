# Schemas
This page is used to document the commonly used mechanisms the game client employs.

## Object Creation
The game client merely calls upon or passes around data that is expressly required for a purpose; in other words, it distributes data sparingly.
To do this, three distinct items are employed in succession:
* __Template__: Expresses default values and overall structure of a specific object.
* __Info__: Describes the specific values that may be modified in the template of a specific object.
* __Object__: The end result object.

A manifest is used to first obtain the template. These templates are located in the game client's `Root.wad` file, and a particular template can be located by looking up a certain value.
* For [CoreObjects](./op/coreobject.md), the [Template Manifest](./op/coreobject.md#template-manifest) is used.
* Game effects use a collection of manifests found in `GameEffectData/` and `GameEffectRuleData/` directories.