import { COLORS } from '../consts/colors.js';

export default function showUserGreeting(name) {
	console.log(
		`${COLORS.success}Welcome to the File Manager, ${name}!${COLORS.reset}\n`
	);
}
