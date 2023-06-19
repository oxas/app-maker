import { cancel, confirm, isCancel, select } from "@clack/prompts";
import Prompt from "../types/prompt";
import Option from "../types/option";
type Result = string | null;
let result: Result[] = [];

export default async function showPrompts(prompts: Prompt[]): Promise<Result[]> {
	for (let i = 0; i < prompts.length; i++) {
		const prompt = prompts[i];
		if (prompt.type === "confirm") {
			const res = await confirm({
				message: prompt.message,
				active: prompt.active.label,
				inactive: prompt.inactive.label,
				initialValue: prompt.initial,
			});
			if (isCancel(res)) {
				cancel("Operation cancelled.");
				process.exit();
			}
			if (res) {
				result.push(prompt.active.id);
				if (prompt.active.prompts && prompt.active.prompts.length > 0) {
					await showPrompts(prompt.active.prompts);
				}
			}
			if (!res) {
				result.push(prompt.inactive.id);
				if (prompt.inactive.prompts && prompt.inactive.prompts.length > 0) {
					await showPrompts(prompt.inactive.prompts);
				}
			}
		}
		if (prompt.type === "select") {
			const res = await select({
				message: prompt.message,
				options: prompt.options.map((o) => {
					return { value: o.id, label: `${o.label}${o.flag ? ` (${o.flag})` : ""}`, hint: o.hint };
				}),
			});
			if (isCancel(res)) {
				cancel("Operation cancelled.");
				process.exit();
			}
			if (res) {
				result.push(res as string);
				const option: Option = prompt.options.find((o) => o.id == res) as Option;
				if (option.prompts && option.prompts.length > 0) {
					await showPrompts(option.prompts);
				}
			}
		}
	}
	return result;
}
