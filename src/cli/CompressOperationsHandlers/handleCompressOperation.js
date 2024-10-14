import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { compressFile } from './compressFile.js';
import { decompressFile } from './decompressFile.js';

export async function handleCompressOperation(operation, args) {
	try {
		switch (operation) {
			case 'compress':
				await compressFile(args);
				break;
			case 'decompress':
				await decompressFile(args);
				break;
			default:
				printErrorToConsole(WRONG_COMMAND);
		}
	} catch (err) {
		printErrorToConsole(err);
	}
}
