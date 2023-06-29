import kleur from "kleur";
import { PromptApiType, PromptBackend } from "../../helpers/prompts";
import Framework from "../../types/framework";
import { BackendForBackend, NonFastifyGraphqlServers } from "../options";

const Express: Framework = {
	id: "express",
	label: "Backend: Express",
	intro: `🌟 Creating a new ${kleur.cyan("Express.js")} project`,
	outro: "",
	hint: "Most popular framework for web todo.",
	prompts: [PromptApiType(NonFastifyGraphqlServers), PromptBackend(BackendForBackend)],
};

export default Express;
