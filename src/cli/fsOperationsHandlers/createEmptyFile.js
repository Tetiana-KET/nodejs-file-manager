import fs from 'node:fs/promises';
import path from 'node:path';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { CREATION_ERROR } from '../../consts/errorMessages.js';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';
import { COLORS } from '../../consts/colors.js';

export async function createFile(fileName) {
	try {
		const fileToCreatePath = path.join(process.cwd(), fileName);
		await fs.writeFile(fileToCreatePath, '', { flag: 'wx' });
		console.log(
			`${COLORS.success}${fileName} was successfully created! 👏\n${COLORS.reset}`
		);
		printCurrentWorkingDir();
	} catch (err) {
		printErrorToConsole(`Operation failed! ${err.message}`);
	}
}
