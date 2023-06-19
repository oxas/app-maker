import { cancel, log } from "@clack/prompts";
import fs from "fs";
import kleur from "kleur";
import path from "path";

async function Permission(dir: string): Promise<boolean> {
	try {
		await fs.promises.access(dir, (fs.constants || fs).W_OK);
		return true;
	} catch (err) {
		return false;
	}
}

export default async function makeDir(appName: string): Promise<string | undefined> {
	const dirName = path.dirname(appName);
	const permission = await Permission(dirName);
	if (permission) {
		if (fs.existsSync(appName) && fs.readdirSync(appName).length > 0) {
			log.error(kleur.red(`Directory "${appName}" already exists and is not empty.`));
			cancel(`Please either remove this directory, or change your project name.`);
			process.exit();
		}
		if (fs.existsSync(appName)) {
			return path.resolve(appName);
		}
		return fs.promises.mkdir(appName, { recursive: true });
	} else {
		log.error(`You don't currently have write permission for this folder`);
		cancel(`Please check folder permissions and try again.`);
		process.exit();
	}
}
