import os from 'os';
import { printCurrentWorkingDir } from '../../utils/printCurrentWorkingDir.js';
import { COLORS } from '../../consts/colors.js';

export function printUserMachineCpuData() {
	const cpus = os.cpus();
	const cpuData = cpus.map((cpu, index) => ({
		CPU: index + 1,
		Model: cpu.model,
		Clock_rate: `${cpu.speed / 1000} GHz`,
	}));

	console.log(
		`${COLORS.success}Total number of CPUs: ${cpus.length}\n${COLORS.reset}`
	);
	console.table(cpuData);
	printCurrentWorkingDir();
}
