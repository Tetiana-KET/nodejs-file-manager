import os from 'os';
import { COLORS } from '../../consts/colors.js';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';

export function printUserHomeDirectory() {
	console.log(
		`${COLORS.success}Home Directory: ${os.homedir()}\n${COLORS.reset}`
	);
	printCurrentWorkingDir();
}
