import { isCancel, cancel, select } from "@clack/prompts";
import Frameworks from "../data/frameworks";
import { AppTypeKeys } from "../types/keys";
export default async function getFramework(appType: AppTypeKeys): Promise<string> {
	const framework = await select({
		message: "Please select a framework for your app",
		options: Frameworks[appType].map((f) => {
			return { value: f.id, label: f.label, hint: f.hint };
		}),
	});
	if (isCancel(framework)) {
		cancel("Operation cancelled.");
		process.exit();
	}
	return framework as string;
}
