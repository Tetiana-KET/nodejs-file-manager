import fs from 'node:fs/promises';
import path from 'node:path';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { CREATION_ERROR } from '../../consts/errorMessages.js';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';

export async function createFile(fileName) {
    try {
        const fileToCreatePath = path.join(process.cwd(), fileName)
        await fs.writeFile(fileToCreatePath, '', { flag: 'wx' })
        printCurrentWorkingDir();
  } catch {
    printErrorToConsole(CREATION_ERROR)
  }
}
