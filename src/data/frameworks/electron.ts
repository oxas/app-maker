import kleur from "kleur";
import {
	BackendForBackend,
	BackendForFrontend,
	NonFastifyGraphqlServers,
	ReactBasedUiOptions,
	Tailwind,
	VueBasedUiOptions,
} from "../options";
import {
	PromptApiType,
	PromptBackend,
	PromptBundler,
	PromptLanguage,
	PromptUi,
} from "../../helpers/prompts";
import Prompt from "../../../types/prompt";
import React from "./react";
import Next from "./next";
import Framework from "../../../types/framework";
import Bundlers from "../bundlers";

export const PromptElectronFramework = (): Prompt => ({
	type: "select",
	message: "Select a framework for building ui", //TODO
	options: [
		{
			id: "react",
			label: "React",
			prompts: [PromptBundler([Bundlers.webpack, Bundlers.vite]), PromptUi(ReactBasedUiOptions)],
		},
		{ id: "vue", label: "Vue", prompts: [PromptUi(VueBasedUiOptions)] },
		{ id: "next", label: "Next", prompts: [PromptUi(ReactBasedUiOptions)] },
		{
			id: "angular",
			label: "Angular",
			prompts: [PromptBundler([Bundlers.webpack, Bundlers.vite]), PromptUi(Tailwind)],
		},
	],
});

const Electron: Framework = {
	id: "electron",
	label: "Desktop: Electron",
	intro: `🌟 Creating a new ${kleur.cyan("Electron.js")} project`,
	outro: "",
	hint: "Most popular framework for web todo.",
	prompts: [PromptLanguage(), PromptElectronFramework(), PromptBackend(BackendForFrontend)],
};

export default Electron;
