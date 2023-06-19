import Prompt from "./prompt";
import { outro } from "@clack/prompts";

export default interface Framework {
	id: string;
	label: string;
	intro: string;
	outro: string;
	hint: string;
	prompts: Prompt[];
}
