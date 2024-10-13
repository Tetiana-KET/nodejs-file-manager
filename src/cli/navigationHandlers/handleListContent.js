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
				regularFiles.push({
					Name: element.name,
					Type: 'file',
				});
			} else if (element.isDirectory()) {
				directories.push({
					Name: element.name,
					Type: 'directory',
				});
			}
		});

		directories.sort((a, b) => a.Name.localeCompare(b.Name));
		regularFiles.sort((a, b) => a.Name.localeCompare(b.Name));

		const result = [...directories, ...regularFiles];

		console.table(result);
	} catch (err) {
		printErrorToConsole(err);
	}
}
