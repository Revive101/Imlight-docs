# Building Imlight

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
If _dragon's_ `PlayerData` database starts in embedded mode, Imlight will create 1-9 debug accounts.
* The username will be `admin[1-9]`.
* The password will always be `debug`.
* For example, you may log in with username `admin4` and password `debug`.

If a database URL *is* present, _dragon_ requires certificates to be available at `./Imlight/Certificates/`.

## FAQ
> After selecting a character, the game hangs.

If you're running Imlight on the same machine you're playing on, check client logs to make sure Imlight is _not_ sending your outside IP.

---

> SessionActor service attempted to ask another service with Imlight.CoreLib.Shared.Packets.ZONE_102_PROTOCOL+MSG_ZONETRANSFER, but the timeout was exceeded.

You put a database url in `Config/Imlight.ini`, but failed to provide a proper certificate.

---