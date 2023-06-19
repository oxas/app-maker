import { cancel, isCancel, log, spinner } from "@clack/prompts";
import kleur from "kleur";
import path from "path";
import getPkgManager from "./get-pkg-manager";
import runInstall from "./run-install";
import baseName from "../utils/getBaseName";

export default async function installPkg(root: string) {
	const pm = await getPkgManager();
	const dir = `./${baseName(root)}`;
	if (!pm) {
		log.warn(kleur.yellow(`Don't forget to install packages before running the application.`));
		log.message(kleur.inverse(` cd ${dir} && npm install `));
	} else {
		const s = spinner();
		s.start("Installing packages...");
		const res = runInstall(root, pm);
		if (res) {
			s.stop(kleur.green("Packages has been installed successfully"));
		} else {
			s.stop(kleur.red("Error while installing the packages"));
			log.message(
				`Try installing packages manually by running ${kleur.cyan(` cd ${dir} && npm install `)} `
			);
		}
		if (isCancel(s)) {
			cancel("Operation cancelled.");
		}
	}
}
