import { WRONG_COMMAND } from '../../consts/errorMessages.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { readFile } from './readFile.js';

export default async function fsOperationsHandler(operation, args) {
	try {
		switch (operation) {
			case 'cat':
				await readFile(args[0]);
				break;
			// case 'add':
			// 	break;
			// case 'rn':
			// 	break;
			// case 'cp':
			// 	break;
			// case 'mv':
			// 	break;
			// case 'rm':
			// 	break;
			default:
				printErrorToConsole(WRONG_COMMAND);
		}
	} catch (err) {
		printErrorToConsole(err);
	}
}
