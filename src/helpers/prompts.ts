import kleur from "kleur";
import Uis from "../data/uis";
import Option from "../types/option";
import Prompt from "../types/prompt";

// export const PromptLanguage = (): ConfirmPrompt => {
// 	return {
// 		type: "confirm",
// 		message: `🧪 Would you like to use ${kleur.cyan("TypeScript")} with this project?`,
// 		active: { id: "ts", label: "Yes" },
// 		inactive: { id: "js", label: "No" },
// 		initial: true,
// 	};
// };

export const PromptBundler = (bundlerOptions: Option[]): Prompt => {
	return {
		type: "select",
		message: "📦 Select a bundler",
		options: bundlerOptions,
	};
};

export const PromptUi = (uiOptions: Option[]): Prompt => {
	return {
		type: "select",
		message: "🎨 Select an UI library for this project?",
		options: uiOptions,
	};
};

export const PromptTailwind = (): Prompt => {
	return {
		type: "confirm",
		message: `🎨 Would you like to use ${kleur.cyan("Tailwind CSS")} with this project?`,
		active: { id: Uis.tw.id, label: "Yes" },
		inactive: { id: null, label: "No" },
		initial: false,
	};
};

export const PromptBackend = (backendOptions: Option[]): Prompt => {
	return {
		type: "select",
		message: "💾 Select a backend for your project?",
		options: backendOptions,
	};
};

export const PromptApiType = (graphqlServerOptions: Option[]): Prompt => {
	return {
		type: "confirm",
		message: `☁ Select your server type?`,
		active: { id: null, label: "REST API" },
		inactive: {
			id: "graph",
			label: "GraphQL API",
			prompts: [
				{
					type: "select",
					message: "📦 Select a GraphQL server library?",
					options: graphqlServerOptions,
				},
			],
		},
		initial: true,
	};
};
