import { isCancel, cancel, select } from "@clack/prompts";
import Frameworks from "../data/frameworks";
export default async function getFramework(): Promise<string> {
	const framework = await select({
		message: "Pick a framework to continue",
		options: Frameworks.map((f) => {
			return { value: f.id, label: f.label, hint: f.hint };
		}),
	});
	if (isCancel(framework)) {
		cancel("Operation cancelled.");
		process.exit();
	}
	return framework as string;
}
