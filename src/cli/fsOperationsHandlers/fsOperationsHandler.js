import { WRONG_COMMAND } from '../../consts/errorMessages.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { copyFile } from './copyFile.js';
import { createFile } from './createEmptyFile.js';
import { readFile } from './readFile.js';
import { renameFile } from './renameFile.js';

export default async function fsOperationsHandler(operation, args) {
	try {
		switch (operation) {
			case 'cat':
				await readFile(args[0]);
				break;
			case 'add':
				await createFile(args[0]);
				break;
			case 'rn':
				await renameFile(args);
				break;
			case 'cp':
				await copyFile(args);
				break;
			case 'mv':
				break;
			case 'rm':
				break;
			default:
				printErrorToConsole(WRONG_COMMAND);
		}
	} catch (err) {
		printErrorToConsole(err);
	}
}
