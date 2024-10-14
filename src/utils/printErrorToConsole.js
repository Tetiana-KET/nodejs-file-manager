import { COLORS } from '../consts/colors.js';

export function printErrorToConsole(text) {
	console.log(`${COLORS.error}${text}\n${COLORS.reset}`);
}
