#!/usr/bin/env node
import { cancel, intro, isCancel, log, outro, text } from "@clack/prompts";
import kleur from "kleur";
import path from "path";
import Framework from "./types/framework";
import Frameworks from "./data/frameworks";
import fetchTemplate from "./helpers/fetch-template";
import getFramework from "./helpers/get-framework";
import gitInit from "./helpers/git-init";
import installPkg from "./helpers/install-pkg";
import makeDir from "./helpers/make-dir";
import patchPackageJson from "./helpers/patch-package-json";
import showPrompts from "./helpers/show-prompts";
import validateProjName from "./helpers/validate-proj-name";
import getTemplateName from "./utils/getTemplateName";
import pkgJson from "../package.json";

async function run() {
	intro(`${kleur.bgCyan(" Nodeup ")} (${pkgJson.version})`);
	const frameworkId: string = await getFramework();
	const framework: Framework | undefined = Frameworks.find((f) => f.id === frameworkId);
	if (!framework) {
		log.error(kleur.red("Error: Something isn't right!!"));
		process.exit();
	}
	log.info(framework?.intro);

	const defaultProjectName = "my-app";
	const appName =
		(await text({
			message: "What is your project named?",
			placeholder: defaultProjectName,
			validate(v) {
				const validation = validateProjName(path.basename(path.resolve(v)));
				if (!validation.valid) {
					return "Invalid project name: " + validation.problems![0];
				}
			},
		})) || defaultProjectName;
	if (isCancel(appName)) {
		cancel("Operation cancelled.");
		process.exit();
	}
	const root = (await makeDir(appName)) as string;
	const responses = await showPrompts(framework.prompts);
	const template = getTemplateName(responses);
	console.log(template);
	await fetchTemplate(root, frameworkId, "ts-app");
	await patchPackageJson(root);
	await gitInit(root);
	await installPkg(root);
	outro("You are done!");
}
run();
