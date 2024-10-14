import { COLORS } from '../consts/colors.js';

export function printCurrentWorkingDir() {
	console.log(
		`${COLORS.info}You are currently in ${process.cwd()}${COLORS.reset}\n`
	);
}
