import os from 'os';
import { COLORS } from '../../consts/colors.js';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';

export function printUserEOL() {
	console.log(
		`${COLORS.success}End-Of-Line (EOL): ${JSON.stringify(os.EOL)}\n${
			COLORS.reset
		}`
	);
	printCurrentWorkingDir();
}
