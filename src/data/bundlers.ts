import { BundlerKeys } from "../types/keys";
import Option from "../types/option";

const Bundlers: { [key in BundlerKeys]: Option } = {
	webpack: {
		id: "webpack",
		label: "Webpack",
		hint: "A GraphQL server that works with any Node.js HTTP framework",
	},
	vite: {
		id: "vite",
		label: "Vite",
		hint: "Batteries-included cross-platform GraphQL over HTTP",
	},
	parcel: {
		id: "parcel",
		label: "Parcel",
		hint: "Mercurius is a flexible and extendible GraphQL adapter for Fastify",
	},
};

export default Bundlers;
