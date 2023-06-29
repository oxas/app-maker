import kleur from "kleur";
import { BackendForFrontend, ReactBasedUiOptions } from "../options";
import { PromptBackend, PromptTailwind, PromptUi } from "../../helpers/prompts";
import Framework from "../../types/framework";

const React: Framework = {
	id: "react",
	label: "Frontend: React",
	intro: `🌟 Creating a new ${kleur.cyan("React.js")} project`,
	outro: "",
	hint: "Most popular framework for web todo.",
	prompts: [
		// PromptBundler([]),
		// PromptTailwind(),
		PromptUi(ReactBasedUiOptions),
		PromptBackend(BackendForFrontend),
	],
};

export default React;
