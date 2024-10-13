import { WRONG_COMMAND } from '../consts/errorMessages.js';
import { EXIT, NAVIGATION } from '../consts/operationTypes.js';
import { printErrorToConsole } from '../utils/printErrorToConsole.js';
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
			default:
				printErrorToConsole(WRONG_COMMAND);
		}
	} catch (err) {}
}
