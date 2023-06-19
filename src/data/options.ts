import Uis from "./uis";
import Backends from "./backends";
import GraphqlServers from "./graph-servers";
import Option from "../types/option";

export const ReactBasedUiOptions: Option[] = [Uis.tw, Uis.mui, Uis.chakra, Uis.none];
export const VueBasedUiOptions: Option[] = [Uis.tw, Uis.element, Uis.vuetify, Uis.none];
export const Tailwind: Option[] = [Uis.tw];

export const BackendForBackend: Option[] = [
	Backends.mongodb,
	Backends.postgres,
	Backends.mysql,
	Backends.sqlite,
	Backends.no_db,
];
export const BackendForFrontend: Option[] = [
	Backends.firebase,
	Backends.supabase,
	Backends.appwrite,
	Backends.rest,
	Backends.graphql,
	Backends.no_be,
];
export const BackendForFullstack: Option[] = [
	Backends.firebase,
	Backends.supabase,
	Backends.appwrite,
	Backends.mongodb,
	Backends.postgres,
	Backends.mysql,
	Backends.sqlite,
	Backends.rest,
	Backends.graphql,
	Backends.no_be,
];
export const NonFastifyGraphqlServers: Option[] = [
	GraphqlServers.apollo,
	GraphqlServers.yoga,
	GraphqlServers.default,
];

export const FastifyGraphqlServers: Option[] = [
	GraphqlServers.mercurius,
	...NonFastifyGraphqlServers,
];
