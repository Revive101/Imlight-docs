# Building Imlight
Hello, developers! Just a reminder that Imlight is still closed-source and only available to the team of Revive101.

## Development Environment
All 3 [parts](../index.md#imlight-parts) are running [dotnet 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0). 

Any development environment will work, so long as it can support the conventions found in the `.editorconfig` found in the project root. If you use omnisharp as a language server, an `omnisharp.json` file also exists in the root as an alternative.

## Requirements
Imlight has a few running gears, and expects existing tools to be available at specific locations.

#### Patch Server
Imlight sources the same files the game client uses for patching, and a URL to that patch server should be present in `Config/Imlight.ini`. You may run your own patch server using [Aurorium](https://github.com/Revive101/Aurorium).

::: warning
Do not _ever_ point Imlight towards the live patch server. 
:::

#### Dragon Database

Imlight uses [RavenDB](https://ravendb.net/) to store its persistent data. There are two databases used by Imlight.

* `WorldData`: The world data, such as zone transfers and active events. It's recommended that the development party should have access to this database to create the relevant data in unison.
* `PlayerData`: The users' account and character data. This is incredibly sensitive, and is only recommended to be use in production deployment scenarios.

If a URL is not present in the configuration, Imlight will instead employ an embedded database for either of the databases.
If a database URL _is_ present, _dragon_ requires certificates to be available at `./Imlight/Certificates/`.

## FAQ
> After selecting a character, the game hangs.

Imlight is most likely giving the game client the wrong IP. 

---