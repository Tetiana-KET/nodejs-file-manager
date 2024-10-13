import { WRONG_COMMAND } from '../../consts/errorMessages.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { handleChangeDir } from './handleChangeDir.js';
import { handleListContent } from './handleListContent.js';
import { handleMoveUp } from './handleMoveUp.js';

export default function navigationHandler(operation, args) {
	try {
		switch (operation) {
			case 'up':
				handleMoveUp();
				break;
			case 'cd':
				handleChangeDir(args[0]);
				break;
			case 'ls':
				handleListContent();
				break;
			default:
				printErrorToConsole(WRONG_COMMAND);
		}
	} catch {}
}
