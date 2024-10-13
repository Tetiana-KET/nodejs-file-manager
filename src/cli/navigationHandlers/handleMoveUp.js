import path from 'path';
import { homedir } from 'os';
import { UP_ERROR, UP_INFO } from '../../consts/errorMessages.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import printCurrentWorkingDir from '../../utils/printCurrentWorkingDir.js';

export function handleMoveUp() {
	const curDir = process.cwd();
	const rootDir = homedir();
	const parentDir = path.dirname(curDir);
	if (rootDir !== curDir) {
		try {
			process.chdir(parentDir);
			printCurrentWorkingDir();
		} catch {
			printErrorToConsole(UP_ERROR);
		}
	} else {
		printErrorToConsole(UP_INFO);
	}
}
