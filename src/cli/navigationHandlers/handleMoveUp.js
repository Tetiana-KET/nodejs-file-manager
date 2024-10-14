import path from 'path';
import { UP_ERROR, UP_INFO } from '../../consts/errorMessages.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import {printCurrentWorkingDir} from '../../utils/printCurrentWorkingDir.js';
import { ROOT_FOLDER } from '../../consts/rootDirectory.js';

export function handleMoveUp() {
	const curDir = process.cwd();
	const parentDir = path.dirname(curDir);
	if (ROOT_FOLDER !== curDir) {
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
