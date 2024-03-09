**Forge CLI**
====
Forge is a cli tool that provides a scaffolded approach to building nodejs,express API's bundled with knex and postgres database service layer.

[![Version](https://img.shields.io/npm/v/forge-node-cli)](https://www.npmjs.com/package/forge-node-cli)

<!-- toc -->
* [Features](#features)
* [Usage](#usage)
* [Commands](#commands)

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