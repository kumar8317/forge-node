import { expect, test } from '@oclif/test';
import * as fs from 'fs';

describe('create-project', () => {
  test
    .stdout()
    .command(['create-project', 'myNewProject'])
    .it('runs create-project cmd', async (ctx) => {
      const projectName = 'myNewProject';

      // // Wait for the condition to be true before making the assertion
      // await waitForCondition(() => fs.existsSync(projectName));

      // // Check if the project directory has been created
      // expect(fs.existsSync(projectName)).to.be.true;

      // // Clean up: Remove the test project directory
      // fs.rmdirSync(projectName, { recursive: true });
    });
});
