import {Args, Command, Flags} from '@oclif/core'
import chalk from 'chalk'
import * as fs from "fs";
import { execSync } from 'child_process';

export const starterTemplateRepo = 'https://github.com/kumar8317/forge-node-starter';
export const SUCCESS_EXIT_CODE = 0;
export const OPTION_RECURSIVE = '-r';
export const UTF8 = 'utf8';
// Place release tag here
export const releaseTag = 'v0.0.1';
const Log = console.log;

function formatFeatureName(name: string) {
  return name.split(" ").join("-").toLocaleLowerCase();
}

function isDirectoryExist(path: string) {
  return (fs.existsSync(path));
}

export default class CreateProject extends Command {
  static args = {
    project_name: Args.string({description: 'Project Name', required: true}),
  }
  static description = 'Scaffolds a fresh Forge express project'

  static examples = ['forge create-project myNewProject']

  static flags = {
    help: Flags.help({ char: 'h' }),
  }

  async run(): Promise<void> {
    const { args, flags} = await this.parse(CreateProject)
    const projectName = formatFeatureName(args.project_name);

    if (isDirectoryExist(projectName)) {
      throw new Error(`There's already a Project with the name '${projectName}'`);
    }

    Log(chalk.green(`Generating Project - ${chalk.yellow(projectName)} ....`));

    const cloneCommand = `git clone ${starterTemplateRepo} --depth 1 --branch ${releaseTag} ${projectName} > /dev/null 2>&1`;
    try {
      execSync(cloneCommand,{stdio: 'inherit'})
      execSync(`npx rimraf ${projectName}/.git`,{stdio: 'inherit'})
      Log(chalk.green('Project generated successfully'));
      Log(chalk.green('-------------------------------'));
    } catch (error) {
      console.error('Error during project generation:', error);
      throw new Error('Failed to create project. Please ensure you have an internet connection.');
    }
  }
}
