export default function getUserName() {
	return process.env.npm_config_username || 'Dear Guest';
}
