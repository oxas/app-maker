export type BackendKeys =
	| "rest"
	| "graphql"
	| "firebase"
	| "supabase"
	| "appwrite"
	| "mongodb"
	| "postgres"
	| "mysql"
	| "sqlite"
	| "no_db"
	| "no_be";

export type BackendOptionKeys =
	| "axios"
	| "got"
	| "node_fetch"
	| "apollo"
	| "relay"
	| "prisma"
	| "mongoose"
	| "sequelize"
	| "type_orm"
	| "no_orm"
	| "no_client";

export type UiKeys = "tw" | "mui" | "chakra" | "vuetify" | "element" | "none";

export type GraphServerKeys = "apollo" | "yoga" | "mercurius" | "default";

export type BundlerKeys = "vite" | "webpack" | "parcel";

export type AppTypeKeys = "web" | "mobile" | "desktop" | "cli";
