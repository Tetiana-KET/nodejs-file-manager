import fs from 'node:fs';
import { join } from 'path';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { COLORS } from '../../consts/colors.js';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';

export async function readFile(path) {
	const curDir = process.cwd();
	const readableStream = fs.createReadStream(join(curDir, path), 'utf8');

	let data = '';
	readableStream.on('data', chunk => (data += chunk));
	readableStream.on('end', () => {
		console.log(`${COLORS.success}${data}\n${COLORS.reset}`);
		printCurrentWorkingDir();
	});
	readableStream.on('error', error => {
		printErrorToConsole(error);
	});
}
