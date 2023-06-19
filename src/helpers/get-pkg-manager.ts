import { cancel, confirm, isCancel, select } from "@clack/prompts";

export default async function getPkgManager(): Promise<string | false> {
	const res = await confirm({
		message: "🧩 Would you like to install the dependencies?",
		initialValue: true,
	});
	if (isCancel(res)) {
		cancel("Operation cancelled.");
		process.exit();
	}
	if (res) {
		const pm = await select({
			message: "📦 Select a package manager?",
			options: [
				{ value: "npm", label: "npm" },
				{ value: "yarn", label: "yarn" },
				{ value: "pnpm", label: "pnpm" },
			],
		});
		if (isCancel(pm)) {
			cancel("Operation cancelled.");
			process.exit();
		}
		return pm as string;
	}
	return res;
}
