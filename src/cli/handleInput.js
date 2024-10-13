import { COLORS } from '../consts/colors.js';
import { EXIT } from '../consts/operationTypes.js';

export default async function handleInput(input, fn) {
	const [operationType, ...args] = input.trim().split(/\s+/g);

	try {
		switch (operationType) {
			case EXIT:
				fn();
				break;
			default:
				console.log(
					`${COLORS.error}Operation failed! Please check your input. You have used wrong command.\n${COLORS.reset}`
				);
		}
	} catch (err) {}
}
