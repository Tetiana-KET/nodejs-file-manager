import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import getUserName from './utils/getUserName.js';
import printCurrentWorkingDir from './utils/printCurrentWorkingDir.js';
import showUserGreeting from './utils/showUserGreeting.js';
import handleInput from './cli/handleInput.js';
import { COLORS } from './consts/colors.js';

export default function app() {
	const userName = getUserName();
	showUserGreeting(userName);
	printCurrentWorkingDir();

	const rl = readline.createInterface({ input, output });

	function closeRL() {
		rl.close();
	}

	rl.on('line', async line => {
		await handleInput(line, closeRL);
	});

	rl.on('close', () => {
		console.log(
			`${COLORS.success}Thank you for using File Manager, ${userName}, goodbye!\n${COLORS.reset}`
		);
		printCurrentWorkingDir();
	});

	rl.on('error', () => {
		console.log(
			`${COLORS.error}An unexpected error ocurred!\n${COLORS.reset}\n`
		);
	});
}
