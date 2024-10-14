import path from 'path';
import { DEST_ERROR } from '../../consts/errorMessages.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import {printCurrentWorkingDir} from '../../utils/printCurrentWorkingDir.js';

export function handleChangeDir(dest) {
	try {
		process.chdir(path.normalize(dest));
		printCurrentWorkingDir();
	} catch {
		printErrorToConsole(DEST_ERROR);
	}
}
