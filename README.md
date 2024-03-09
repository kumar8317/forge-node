oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g example
$ example COMMAND
running command...
$ example (--version)
example/0.0.0 linux-x64 node-v18.17.0
$ example --help [COMMAND]
USAGE
  $ example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`example hello PERSON`](#example-hello-person)
* [`example hello world`](#example-hello-world)
* [`example help [COMMANDS]`](#example-help-commands)
* [`example plugins`](#example-plugins)
* [`example plugins:install PLUGIN...`](#example-pluginsinstall-plugin)
* [`example plugins:inspect PLUGIN...`](#example-pluginsinspect-plugin)
* [`example plugins:install PLUGIN...`](#example-pluginsinstall-plugin-1)
* [`example plugins:link PLUGIN`](#example-pluginslink-plugin)
* [`example plugins:uninstall PLUGIN...`](#example-pluginsuninstall-plugin)
* [`example plugins reset`](#example-plugins-reset)
* [`example plugins:uninstall PLUGIN...`](#example-pluginsuninstall-plugin-1)
* [`example plugins:uninstall PLUGIN...`](#example-pluginsuninstall-plugin-2)
* [`example plugins update`](#example-plugins-update)

## `example hello PERSON`

Say hello

```
USAGE
  $ example hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/kumar8317/example/blob/v0.0.0/src/commands/hello/index.ts)_

## `example hello world`

Say hello world

```
USAGE
  $ example hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ example hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/kumar8317/example/blob/v0.0.0/src/commands/hello/world.ts)_

## `example help [COMMANDS]`

Display help for example.

```
USAGE
  $ example help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for example.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.14/src/commands/help.ts)_

## `example plugins`

List installed plugins.

```
USAGE
  $ example plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ example plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/index.ts)_

## `example plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ example plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ example plugins add

EXAMPLES
  $ example plugins add myplugin 

  $ example plugins add https://github.com/someuser/someplugin

  $ example plugins add someuser/someplugin
```

## `example plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ example plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ example plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/inspect.ts)_

## `example plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ example plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ example plugins add

EXAMPLES
  $ example plugins install myplugin 

  $ example plugins install https://github.com/someuser/someplugin

  $ example plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/install.ts)_

## `example plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ example plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ example plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/link.ts)_

## `example plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ example plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ example plugins unlink
  $ example plugins remove

EXAMPLES
  $ example plugins remove myplugin
```

## `example plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ example plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/reset.ts)_

## `example plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ example plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ example plugins unlink
  $ example plugins remove

EXAMPLES
  $ example plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/uninstall.ts)_

## `example plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ example plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ example plugins unlink
  $ example plugins remove

EXAMPLES
  $ example plugins unlink myplugin
```

## `example plugins update`

Update installed plugins.

```
USAGE
  $ example plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
