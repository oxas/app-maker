import Option from "./option";

export interface ConfirmPrompt {
	type: "confirm";
	message: string;
	active: Option;
	inactive: Option;
	initial: boolean;
}

export interface SelectPrompt {
	type: "select";
	message: string;
	options: Option[];
}

type Prompt = ConfirmPrompt | SelectPrompt;
export default Prompt;
