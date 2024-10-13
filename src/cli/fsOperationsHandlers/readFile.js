import fs from 'node:fs';
import { join } from 'path';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';

export async function readFile(path) {
	const curDir = process.cwd();
	const readableStream = fs.createReadStream(join(curDir, path), 'utf8');

	let data = '';
	readableStream.on('data', chunk => (data += chunk));
	readableStream.on('end', () => console.log(data));
	readableStream.on('error', error => {
		printErrorToConsole(error);
	});
}
