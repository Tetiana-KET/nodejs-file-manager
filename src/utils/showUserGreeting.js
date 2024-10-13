import { COLORS } from '../consts/colors.js';

export default function showUserGreeting(name) {
	console.log(
		`${COLORS.info}Welcome to the File Manager, ${name}!${COLORS.reset}\n`
	);
}
