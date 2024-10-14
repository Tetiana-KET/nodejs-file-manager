import fs from 'node:fs/promises';
import path from 'path';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { COLORS } from '../../consts/colors.js';

export async function deleteFile(fileToDelete) {
	const fileToDeletePath = path.resolve(process.cwd(), fileToDelete);
	try {
		await fs.unlink(fileToDeletePath);
		console.log(
			`${COLORS.success}fileToRemove.txt was successfully removed! 👏\n${COLORS.reset}`
		);
		printCurrentWorkingDir();
	} catch (error) {
		printErrorToConsole(`Operation failed! ${error.message}`);
	}
}
