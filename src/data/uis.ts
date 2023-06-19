import { UiKeys } from "../types/keys";
import Option from "../types/option";

const Uis: { [key in UiKeys]: Option } = {
	// flag will be dim & can be - recommended | default | official graphql library
	tw: {
		id: "tw",
		label: "Tailwind CSS",
		flag: "recommended",
		hint: "A utility-first CSS framework",
	},
	mui: { id: "mui", label: "MaterialUI", hint: "Most popular react component library" },
	chakra: { id: "chakra", label: "ChakraUI" },
	vuetify: { id: "vuetify", label: "Vuetify" },
	element: { id: "element", label: "Element Plus" },
	none: { id: null, label: "None: No UI library", hint: "Continue without an UI library" },
};

export default Uis;
