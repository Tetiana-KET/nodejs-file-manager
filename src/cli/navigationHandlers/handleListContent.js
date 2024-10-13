import { readdir } from 'node:fs/promises';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import printCurrentWorkingDir from '../../utils/printCurrentWorkingDir.js';

export async function handleListContent() {
	const curDir = process.cwd();
	printCurrentWorkingDir();

	try {
		const files = await readdir(curDir, { withFileTypes: true });
		const directories = [];
		const regularFiles = [];

		files.forEach(element => {
			if (element.isFile()) {
				regularFiles.push(element);
			} else if (element.isDirectory()) {
				directories.push(element);
			}
		});
		directories.sort((a, b) => a.name.localeCompare(b.name));
		regularFiles.sort((a, b) => a.name.localeCompare(b.name));

		const result = [...directories, ...regularFiles].map(file => ({
			Name: file.name,
			Type: file.isFile() ? 'file' : 'directory',
		}));
		console.table(result);
	} catch (err) {
		printErrorToConsole(err);
	}
}
