import kleur from "kleur";
import Framework from "../../types/framework";
import { BackendForFullstack, ReactBasedUiOptions } from "../options";
import { PromptBackend, PromptUi } from "../../helpers/prompts";
import { intro } from "@clack/prompts";
import { ConfirmPrompt } from "../../types/prompt";

export const AppRouterPrompt = (): ConfirmPrompt => {
	return {
		type: "confirm",
		message: `Use ${kleur.cyan("App Router")}? (recommended)`,
		active: { id: "app", label: "Yes" },
		inactive: { id: null, label: "No" },
		initial: true,
	};
};

const Next: Framework = {
	id: "next",
	label: "Fullstack: Next",
	intro: `🌟 Creating a new ${kleur.cyan("Next.js")} app`,
	outro: "",
	hint: "Most popular fullstack framework todo.",
	prompts: [AppRouterPrompt(), PromptUi(ReactBasedUiOptions), PromptBackend(BackendForFullstack)],
};

export default Next;
