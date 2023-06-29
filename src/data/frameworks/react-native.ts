import kleur from "kleur";
import { BackendForBackend, BackendForFrontend, NonFastifyGraphqlServers } from "../options";
import { PromptApiType, PromptBackend } from "../../helpers/prompts";
import Framework from "../../types/framework";

const ReactNative: Framework = {
	id: "react_native",
	label: "Mobile: React Native",
	intro: `🌟 Creating a new ${kleur.cyan("React Native")} project`,
	outro: "",
	hint: "Most popular framework for web todo.",
	prompts: [PromptBackend(BackendForFrontend)],
};

export default ReactNative;
