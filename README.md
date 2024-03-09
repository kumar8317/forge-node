**Forge CLI**
====
Forge is a cli tool that provides a scaffolded approach to building nodejs,express API's bundled with knex and postgres database service layer.

[![Version](https://img.shields.io/npm/v/forge-node-cli)](https://www.npmjs.com/package/forge-node-cli)


# **Features**

* Scaffolds a Node.js/express.js API project
* Generate Express service layer to spin multiple servers
* Express server comes with configurable middlewares inlcuding cors
* Comes with Knex.js Built in

# **Usage**

``` bash
npm install -g forge-node-cli
forge-node-cli create-project myExpressProject
```

<!-- usagestop -->
# **Commands**
<!-- commands -->
* [`forge create-project PROJECTNAME`](#forge-create-project-projectname)
* [`forge help [COMMANDS]`](#forge-help-commands)
* [`forge plugins`](#forge-plugins)
* [`forge plugins:install PLUGIN...`](#forge-pluginsinstall-plugin)
* [`forge plugins:inspect PLUGIN...`](#forge-pluginsinspect-plugin)
* [`forge plugins:install PLUGIN...`](#forge-pluginsinstall-plugin-1)
* [`forge plugins:link PLUGIN`](#forge-pluginslink-plugin)
* [`forge plugins:uninstall PLUGIN...`](#forge-pluginsuninstall-plugin)
* [`forge plugins:reset`](#forge-pluginsreset)
* [`forge plugins:uninstall PLUGIN...`](#forge-pluginsuninstall-plugin-1)
* [`forge plugins:uninstall PLUGIN...`](#forge-pluginsuninstall-plugin-2)
* [`forge plugins:update`](#forge-pluginsupdate)

## `forge create-project PROJECTNAME`

Scaffolds a fresh Forge express project

```
USAGE
  $ forge create-project PROJECTNAME [-h]

ARGUMENTS
  PROJECTNAME  Project Name

FLAGS
  -h, --help  Show CLI help.

DESCRIPTION
  Scaffolds a fresh Forge express project

EXAMPLES
  $ forge create-project myNewProject
```

_See code: [src/commands/create-project/index.ts](https://github.com/kumar8317/forge-node/blob/v1.3.0/src/commands/create-project/index.ts)_

## `forge help [COMMANDS]`

Display help for forge.

```
USAGE
  $ forge help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for forge.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.14/src/commands/help.ts)_

## `forge plugins`

List installed plugins.

```
USAGE
  $ forge plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ forge plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/index.ts)_

## `forge plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ forge plugins:add plugins:install PLUGIN...

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
  $ forge plugins:add

EXAMPLES
  $ forge plugins:add myplugin 

  $ forge plugins:add https://github.com/someuser/someplugin

  $ forge plugins:add someuser/someplugin
```

## `forge plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ forge plugins:inspect PLUGIN...

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
  $ forge plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/inspect.ts)_

## `forge plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ forge plugins:install PLUGIN...

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
  $ forge plugins:add

EXAMPLES
  $ forge plugins:install myplugin 

  $ forge plugins:install https://github.com/someuser/someplugin

  $ forge plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/install.ts)_

## `forge plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ forge plugins:link PLUGIN

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
  $ forge plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/link.ts)_

## `forge plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ forge plugins:remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ forge plugins:unlink
  $ forge plugins:remove

EXAMPLES
  $ forge plugins:remove myplugin
```

## `forge plugins:reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ forge plugins:reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/reset.ts)_

## `forge plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ forge plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ forge plugins:unlink
  $ forge plugins:remove

EXAMPLES
  $ forge plugins:uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/uninstall.ts)_

## `forge plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ forge plugins:unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ forge plugins:unlink
  $ forge plugins:remove

EXAMPLES
  $ forge plugins:unlink myplugin
```

## `forge plugins:update`

Update installed plugins.

```
USAGE
  $ forge plugins:update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`forge-node-cli create-project PROJECT NAME`](#forge-node-cli-create-project-project-name)

## `forge-node-cli create-project PROJECT NAME`

Scaffolds a fresh Nodejs express project

```
USAGE
  $ forge-node-cli create-project PROJECT NAME

ARGUMENTS
  PROJECT NAME  Name of project to create

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  forge-node-cli create-project myNewExpressProject
```
