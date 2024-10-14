import { WRONG_COMMAND } from '../consts/errorMessages.js';
import {
	COMPRESS_OPERATIONS,
	EXIT,
	FS_OPERATIONS,
	HASH_OPERATION,
	NAVIGATION,
	OS_OPERATION,
} from '../consts/operationTypes.js';
import { printErrorToConsole } from '../utils/printErrorToConsole.js';
import { handleCompressOperation } from './CompressOperationsHandlers/handleCompressOperation.js';
import fsOperationsHandler from './fsOperationsHandlers/fsOperationsHandler.js';
import { calculateHash } from './HashCalculation/calculateHash.js';
import navigationHandler from './navigationHandlers/navigationHandler.js';
import { osOperationsHandler } from './osOperationsHandlers/osOperationsHandler.js';

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
			case COMPRESS_OPERATIONS[operationType]:
				await handleCompressOperation(operationType, args);
				break;
			case OS_OPERATION:
				osOperationsHandler(args[0]);
				break;
			default:
				printErrorToConsole(WRONG_COMMAND);
		}
	} catch (err) {
		printErrorToConsole(err);
	}
}
