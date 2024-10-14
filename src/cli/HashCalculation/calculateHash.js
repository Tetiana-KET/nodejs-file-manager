import fs from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { COLORS } from '../../consts/colors.js';

export async function calculateHash(fileToCalculateHash) {
	const fileToCalculateHashPath = path.resolve(
		process.cwd(),
		fileToCalculateHash
	);

	const hash = createHash('sha256');
	const readStream = fs.createReadStream(fileToCalculateHashPath);

	readStream.on('data', chunk => {
		hash.update(chunk);
	});
	readStream.on('end', () => {
		console.log(
			`${COLORS.success}SHA256 hash for the file: ${hash.digest('hex')}\n${
				COLORS.reset
			}`
		);
		printCurrentWorkingDir();
	});
	readStream.on('error', err => {
		printErrorToConsole(`Operation failed! ${err.message}`);
	});
}
