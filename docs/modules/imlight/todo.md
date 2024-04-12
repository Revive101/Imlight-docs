# Imlight Todo

## Combat

- [ ] Combat:
  - [x] `WizardZoneCreature` player interaction
  - [x] The combat sigil:
    - [x] Spawning combat sigils on demand
    - [x] Players joining an existing duel on interaction
    - [x] Creatures joining an existing duel on interaction
    - [x] Despawning the sigil on duel completion
  - [ ] Player decks:
    - [x] Players being able to add/remove spells from their spellbook
    - [x] Players being able to add/remove TC spells from their spellbook
    - [x] Spellbook spells appearing in combat rounds
    - [x] Spells given from equipment
    - [ ] Commands to add/remove a spell (TC)
    - [x] Commands to learn/unlearn a spell
    - [x] Persistently saving decks
  - [ ] Combat participants:
    - [x] Starting animation for each combat participant
  - [ ] Combat hand:
    - [x] A combat hand, which is 7 cards given at the beginning of each round
    - [x] Discarding cards
    - [ ] Treasure cards
  - [ ] Combat director:
    - [x] Need a system for a creature to get their own game stats
    - [x] Need a system for a creature to get the spells they are able to cast
    - [x] Take in all played cards and do the math
    - [x] Imlight needs to return the actions to the client
    - [ ] Combat execution time
      - [x] Use cinematic times to dictate how long each spell will take
      - [x] Hanging effect times
      - [x] Spells being skipped if the caster has died before their turn
  - [ ] Combat effects:
    - [x] Fizzling
    - [x] Damage
    - [x] Healing
    - [x] Area-of-effect spells
    - [ ] Reshuffle
    - [ ] Pacify
    - [ ] Provoke
    - [ ] Self damage (Sacrifice and Immolate)
    - [ ] Global spells
    - [ ] Hanging effects:
      - [x] Blades
      - [x] Anti-blades
      - [x] Shields
      - [x] Traps
      - [ ] Bonus accuracy
      - [ ] Negative accuracy
      - [ ] Dispells
      - [ ] Prisms
      - [ ] Bonus healing
      - [ ] Negative healing
      - [ ] Damage-over-time
    - [ ] Minions:
      - [ ] Spawning minions
      - [ ] Minion AI
      - [ ] Stealing health from minion
      - [ ] Sacrifice minion
        - [ ] For pips
        - [ ] For health
    - [ ] Stealing hanging effects
    - [ ] Per pip spells
    - [ ] Pip donation spells
  - [ ] Creature decks:
    - [x] Using the template ID of the equipped deck, find what spells a creature is capable of casting
    - [ ] DCT (Dragon Creature Tool) to rebuild the spells
  - [ ] Combat AI:
    - [x] Unify behaviors so that both players and creatures may use the same classes
    - [x] Creature inventory
    - [x] Creature equipment
    - [x] Creature stats changing based on equipment
    - [x] Aggressiveness: Creatures should have a chance to either prepare (blade/shield/trap) or attack
    - [x] Selfishness: When a creature prepares, there is a chance for them to put it on themselves or a teammate. Bosses will always buff themselves
    - [x] Intelligence: When a mob has pips saved, their intelligence dictates if they're smart enough to use a max pip spell or something else
    - [x] Hate: Mobs have an initial target. It will be the person across from them, or the only target available. A few things can change mob targeting:
      - [ ] Taking damage from a player greatly increases the hate towards that player
      - [ ] A player healing softly increases the hate of every mob in the duel
  - [x] Ending the duel
  - [ ] Bugs:
    - [x] Creatures are still moving towards the center of the sigil despite being in combat
    - [x] Combat is very buggy when a third creature enters the duel
    - [x] Discarding is causing an exception for being out of bounds
    - [ ] Healing in combat is not saved persistently
    - [x] Two duels happening in the same zone is very buggy

## Shops

- [ ] Shops
  - [ ] Basic shopkeepers:
    - [x] Hat
    - [x] Robes
    - [x] Boots
    - [x] Rings
    - [x] Amulets
    - [x] Athames
    - [x] Pets
    - [x] Zeke
    - [x] Eloise
  - [x] Commands for adding/removing gold
  - [ ] Other keepers:
    - [ ] TC Shops
    - [ ] Bazaar
    - [ ] Professors

## Social

- [ ] Social:
  - [ ] Friends List:
    - [ ] Adding/removing a friend
    - [ ] Teleporting to a friend
  - [ ] Buddy stats
  - [ ] Whispering

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
