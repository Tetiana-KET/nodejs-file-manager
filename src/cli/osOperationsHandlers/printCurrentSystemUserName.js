import os from 'os';
import { COLORS } from '../../consts/colors.js';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';

export function printCurrentSystemUserName() {
	const userInfo = os.userInfo();
	console.log(
		`${COLORS.success}Current System Username: ${userInfo.username}\n${COLORS.reset}`
	);
	printCurrentWorkingDir();
}
