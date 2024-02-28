# Imlight Todo

## Combat

- [ ] Combat
  - [ ] Spawning the combat sigil
    - [ ] Understanding combat sigils and how they work
    - [ ] `WizardZoneCreature` player interaction
    - [ ] Spawning combat sigils on demand
  - [ ] Starting animation for each combat participant
  - [ ] Combat hand
    - [ ] This requires a new branch to work on spell book behavior
    - [ ] Dragon database should only keep track of spell ID, template ID, and name of each spell a player is capable of casting. It should also only store learned spells, not ones from equipment.
    - [ ] Treasure cards (?)
  - [ ] Combat director
    - [ ] Need a system for a creature to get their own game stats
    - [ ] Need a system for a creature to get the spells they are able to cast
    - [ ] Combat AI for each `WizardZoneCreature` to determine what spell they should cast
    - [ ] Combat director, which takes in all played cards and does the math
  - [ ] Imlight needs to return the actions to the client
  - [ ] Ending the duel
  - [ ] Bugs:
    - [ ] Creatures are still moving towards the center of the sigil despite being in combat.

## Shops

- [ ] Shops
  - [ ] Imlight needs to send service range messages to a player that is within the vicinity of an NPC
  - [ ] Imlight needs a `OnPlayerInteractionExit` method for `WizardZoneObject`.
  - [ ] Perhaps make a new child class of `WizardZoneObject` for NPCs to handle shops and their own dialogue (?)
  - [ ] `Wizard` needs methods to persistently add/remove gold
  - [ ] Understand how the server is supposed to send shop data
  - [ ] Commands for adding/removing gold

## World Transfers

::: tip
Imlight needs wizard zone object interaction first.
:::

- [ ] World transferring using the actual in-game GUI
  - [ ] Imlight needs to send service range messages to a player that is within the vicinity of an NPC
  - [ ] Imlight needs a `OnPlayerInteractionExit` method for `WizardZoneObject`.

## Player Housing

::: tip
Imlight should have social elements before starting this branch.
:::

- [ ] Player housing
  - [ ] Need a system to know what house belongs to which player
  - [ ] Need to add a new collection to dragon database to save a house persistently. A `Wizard` should only keep track of their housing instance ID which points to their house
  - [ ] Being able to teleport to your house
  - [ ] House decorations, including being saved persistently

## Pets

- [ ] Pets
  - [ ] Make an understanding of how the client expects the pet behavior to be shipped
  - [ ] Looking through pet objects to find hatch status
  - [ ] Actually being able to equip pets
  - [ ] Pets being able to add to canonical effects
  - [ ] Pets being capable of leveling up (or aging as the game puts it)
  - [ ] Pet snacks
  - [ ] Pet mini games, I guess
