import path from 'path';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import fs from 'node:fs/promises';
import { COLORS } from '../../consts/colors.js';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';

export async function renameFile(args) {
    const [fileToRenamePath, newFilename] = args;
    try {
        const directory = path.dirname(fileToRenamePath);
        const newPath = path.join(directory, newFilename);
        await fs.rename(fileToRenamePath, newPath);
        console.log(`${COLORS.success}File was successfully renamed\n${COLORS.reset}`);
        printCurrentWorkingDir();
    } catch (error) {
    printErrorToConsole(`Operation failed! ${error.message}`)
  }
}
