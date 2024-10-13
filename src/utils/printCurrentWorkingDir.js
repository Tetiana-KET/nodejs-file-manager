import { COLORS } from '../consts/colors.js';

export default function printCurrentWorkingDir() {
	console.log(
		`${COLORS.info}You are currently in ${process.cwd()}${COLORS.reset}\n`
	);
}
