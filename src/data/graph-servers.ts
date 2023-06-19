import { GraphServerKeys } from "../../types/keys";
import Option from "../../types/option";

const GraphqlServers: { [key in GraphServerKeys]: Option } = {
	apollo: {
		id: "apollo",
		label: "Apollo Server",
		hint: "A GraphQL server that works with any Node.js HTTP framework",
	},
	yoga: {
		id: "yoga",
		label: "graphql-yoga",
		hint: "Batteries-included cross-platform GraphQL over HTTP",
	},
	mercurius: {
		id: "mercurius",
		label: "Mercurius",
		hint: "Mercurius is a flexible and extendible GraphQL adapter for Fastify",
	},
	default: {
		id: null,
		label: "GraphQL.js",
		flag: "Reference implementation",
		hint: "The reference implementation of the GraphQL specification, designed for running GraphQL in a Node.js environment.",
	},
};

export default GraphqlServers;
