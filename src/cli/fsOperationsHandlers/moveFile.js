import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import fs from 'node:fs/promises';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { COLORS } from '../../consts/colors.js';

export async function moveFile(args) {
	const [fileToMovePath, pathToNewDirectory] = args;
	try {
		const sourcePath = path.resolve(process.cwd(), fileToMovePath);
		const destFolder = path.resolve(process.cwd(), 'src', pathToNewDirectory);

		await fs.mkdir(destFolder, { recursive: true });

		const destinationPath = path.resolve(
			destFolder,
			path.basename(fileToMovePath)
		);

		const readStream = createReadStream(sourcePath);
		const writeStream = createWriteStream(destinationPath);
		readStream.pipe(writeStream);

		writeStream.on('finish', async () => {
			try {
				await fs.unlink(sourcePath);
				console.log(
					`${COLORS.success}File was moved successfully to ${destinationPath}\n${COLORS.reset}`
				);
				printCurrentWorkingDir();
			} catch (deleteErr) {
				printErrorToConsole(`Error deleting source file: ${deleteErr.message}`);
			}
		});

		writeStream.on('error', err => {
			printErrorToConsole(`Error writing file: ${err.message}`);
		});

		readStream.on('error', err => {
			printErrorToConsole(`Error reading file: ${err.message}`);
		});
	} catch (err) {
		printErrorToConsole(err);
	}
}
