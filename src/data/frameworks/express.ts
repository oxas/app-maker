import kleur from "kleur";
import { BackendForBackend, NonFastifyGraphqlServers } from "../options";
import { PromptApiType, PromptBackend, PromptLanguage } from "../../helpers/prompts";
import Framework from "../../../types/framework";

const Express: Framework = {
	id: "express",
	label: "Backend: Express",
	intro: `🌟 Creating a new ${kleur.cyan("Express.js")} project`,
	outro: "",
	hint: "Most popular framework for web todo.",
	prompts: [
		PromptLanguage(),
		PromptApiType(NonFastifyGraphqlServers),
		PromptBackend(BackendForBackend),
	],
};

export default Express;
