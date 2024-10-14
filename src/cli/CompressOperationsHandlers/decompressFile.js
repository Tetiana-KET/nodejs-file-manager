import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { COLORS } from '../../consts/colors.js';

export async function decompressFile(args) {
	const [fileToDecompressPath, destinationPath] = args;

	try {
		const sourcePath = path.resolve(process.cwd(), fileToDecompressPath);
		const destPath = path.resolve(
			process.cwd(),
			destinationPath,
			'decompressedFile.txt'
		);

		const readStream = createReadStream(sourcePath);
		const writeStream = createWriteStream(destPath);
		const brotliDecompress = createBrotliDecompress();

		await pipeline(readStream, brotliDecompress, writeStream);

		console.log(
			`${COLORS.success}File was decompressed successfully to ${destPath}\n${COLORS.reset}`
		);
		printCurrentWorkingDir();
	} catch (err) {
		printErrorToConsole(`Operation failed! ${err.message}`);
	}
}
