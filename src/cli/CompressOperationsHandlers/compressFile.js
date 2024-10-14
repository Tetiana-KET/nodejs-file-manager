import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { COLORS } from '../../consts/colors.js';

export async function compressFile(args) {
	const [fileToCompressPath, destinationPath] = args;

	try {
		const sourcePath = path.resolve(process.cwd(), fileToCompressPath);
		const destPath = path.resolve(
			process.cwd(),
			destinationPath,
			`compressedFile.br`
		);

		const readStream = createReadStream(sourcePath);
		const writeStream = createWriteStream(destPath);
		const brotliCompress = createBrotliCompress();

		await pipeline(readStream, brotliCompress, writeStream);

		console.log(
			`${COLORS.success}File was compressed successfully to ${destPath}\n${COLORS.reset}`
		);
		printCurrentWorkingDir();
	} catch (err) {
		printErrorToConsole(`Operation failed! ${err.message}`);
	}
}
