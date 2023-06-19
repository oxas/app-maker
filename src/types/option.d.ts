import Prompt from "./prompt";

export default interface Option {
	id: string | null;
	label: string;
	flag?: string;
	hint?: string;
	prompts?: Prompt[];
}
