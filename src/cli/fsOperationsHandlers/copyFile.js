import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import fs from 'node:fs/promises';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { COLORS } from '../../consts/colors.js';

export async function copyFile(args) {
	const [fileToCopyPath, pathToNewDirectory] = args;
	try {
		const sourcePath = path.resolve(process.cwd(), fileToCopyPath);
		const destFolder = path.resolve(process.cwd(), 'src', pathToNewDirectory);

		await fs.mkdir(destFolder, { recursive: true });

		const destinationPath = path.resolve(
			destFolder,
			path.basename(fileToCopyPath)
		);

		const readStream = createReadStream(sourcePath);
		const writeStream = createWriteStream(destinationPath);
		readStream.pipe(writeStream);

		writeStream.on('finish', () => {
			console.log(
				`${COLORS.success}File was copied successfully to ${destinationPath}\n${COLORS.reset}`
			);
			printCurrentWorkingDir();
		});

		writeStream.on('error', err => {
			printErrorToConsole(`Error writing file: ${err.message}`);
		});

		readStream.on('error', err => {
			printErrorToConsole(`Error reading file: ${err.message}`);
		});
	} catch (error) {
		printErrorToConsole(`Operation failed! ${error.message}`);
	}
}
