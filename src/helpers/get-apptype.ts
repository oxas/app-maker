import { isCancel, cancel, select } from "@clack/prompts";
import Frameworks from "../data/frameworks";
import AppTypes from "../data/app-type";
import { AppTypeKeys } from "../types/keys";
export default async function getAppType(): Promise<string> {
	const appType = await select({
		message: "Please select a project category",
		options: AppTypes.map((t) => {
			return { value: t.id, label: t.label };
		}),
	});
	if (isCancel(appType)) {
		cancel("Operation cancelled.");
		process.exit();
	}
	return appType as string;
}
