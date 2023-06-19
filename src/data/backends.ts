import { BackendKeys, BackendOptionKeys } from "../types/keys";
import Option from "../types/option";

const beo: { [key in BackendOptionKeys]: Option } = {
	//for Back End Option
	axios: { id: "axios", label: "HTTP Client: Axios" },
	got: { id: "got", label: "HTTP Client: Got" },
	node_fetch: { id: "node_fetch", label: "HTTP Client: node-fetch" },
	apollo: { id: "apollo", label: "Apollo Client", flag: "recommended" },
	relay: { id: "relay", label: "Relay" },
	prisma: { id: "prisma", label: "ORM: Prisma" },
	mongoose: { id: "mongoose", label: "ORM: Mongoose" },
	sequelize: { id: "sequelize", label: "ORM: Sequelize" },
	type_orm: { id: "type_orm", label: "ORM: TypeORM" },
	no_orm: { id: null, label: "None: No ORM", hint: "continue without using an ORM" },
	no_client: {
		id: null,
		label: "Built In: Fetch API",
		hint: "continue with built in Fetch API",
	},
};

const SQL_OPTIONS = [beo.prisma, beo.sequelize, beo.type_orm, beo.no_orm];

const Backends: { [key in BackendKeys]: Option } = {
	// flag will be dim & can be - recommended | default | official graphql library
	rest: {
		id: "rest",
		label: "External API: REST API",
		prompts: [
			{
				type: "select",
				message: "📦 Select a HTTP client for your REST API",
				options: [beo.axios, beo.got, beo.node_fetch, beo.no_client],
			},
		],
	},
	graphql: {
		id: "graphql",
		label: "External API: GraphQL API",
		prompts: [
			{
				type: "select",
				message: "📦 Select a GraphQL client for your API",
				options: [beo.apollo, beo.relay],
			},
		],
	},
	firebase: { id: "firebase", label: "Backend: Firebase" },
	supabase: { id: "supabase", label: "Backend: Supabase" },
	appwrite: { id: "appwrite", label: "Backend: Appwrite" },
	mongodb: {
		id: "mongodb",
		label: "Database: MongoDB",
		prompts: [
			{
				type: "select",
				message: "🧱 Select an ORM?",
				options: [beo.mongoose, beo.prisma, beo.no_orm],
			},
		],
	},
	postgres: {
		id: "postgres",
		label: "Database: PostgreSQL",
		prompts: [{ type: "select", message: "🧱 Select an ORM?", options: SQL_OPTIONS }],
	},
	mysql: {
		id: "mysql",
		label: "Database: MySQL",
		prompts: [{ type: "select", message: "🧱 Select an ORM?", options: SQL_OPTIONS }],
	},
	sqlite: {
		id: "sqlite",
		label: "Database: SQLite",
		prompts: [{ type: "select", message: "", options: SQL_OPTIONS }],
	},
	no_db: { id: null, label: "None: No database", hint: "Continue without using a database" },
	no_be: { id: null, label: "None: No backend", hint: "Continue without using any backend" },
};

export default Backends;
