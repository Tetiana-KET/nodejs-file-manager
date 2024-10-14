import os from 'os';
import { COLORS } from '../../consts/colors.js';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';

export function printCpuArchitecture() {
	console.log(
		`${COLORS.success}CPU Architecture: ${os.arch()}\n${COLORS.reset}`
	);
	printCurrentWorkingDir();
}
