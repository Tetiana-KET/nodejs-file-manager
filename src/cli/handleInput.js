import { WRONG_COMMAND } from '../consts/errorMessages.js';
import {
	EXIT,
	FS_OPERATIONS,
	HASH_OPERATION,
	NAVIGATION,
} from '../consts/operationTypes.js';
import { printErrorToConsole } from '../utils/printErrorToConsole.js';
import fsOperationsHandler from './fsOperationsHandlers/fsOperationsHandler.js';
import { calculateHash } from './HashCalculation/calculateHash.js';
import navigationHandler from './navigationHandlers/navigationHandler.js';

export default async function handleInput(input, fn) {
	const [operationType, ...args] = input.trim().split(/\s+/g);

	try {
		switch (operationType) {
			case EXIT:
				fn();
				break;
			case NAVIGATION[operationType]:
				navigationHandler(operationType, args);
				break;
			case FS_OPERATIONS[operationType]:
				await fsOperationsHandler(operationType, args);
				break;
			case HASH_OPERATION:
				await calculateHash(args[0]);
				break;
			default:
				printErrorToConsole(WRONG_COMMAND);
		}
	} catch (err) {
		printErrorToConsole(err);
	}
}
