import { WRONG_COMMAND } from '../../consts/errorMessages.js';
import { printErrorToConsole } from '../../utils/printErrorToConsole.js';
import { printCpuArchitecture } from './printCpuArchitecture.js';
import { printCurrentSystemUserName } from './printCurrentSystemUserName.js';
import { printUserEOL } from './printUserEOL.js';
import { printUserHomeDirectory } from './printUserHomeDirectory.js';
import { printUserMachineCpuData } from './printUserMachineCpuData.js';

export function osOperationsHandler(flag) {
	try {
		switch (flag) {
			case '--EOL':
				printUserEOL();
				break;
			case '--cpus':
				printUserMachineCpuData();
				break;
			case '--homedir':
				printUserHomeDirectory();
				break;
			case '--username':
				printCurrentSystemUserName();
				break;
			case '--architecture':
				printCpuArchitecture();
				break;
			default:
				printErrorToConsole(WRONG_COMMAND);
		}
	} catch (err) {
		printErrorToConsole(err);
	}
}
