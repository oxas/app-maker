import { cancel, confirm, isCancel, log } from "@clack/prompts";
import spawn from "cross-spawn";
import kleur from "kleur";
import path from "node:path";
import baseName from "../utils/getBaseName";

function isInGitRepository(root: string) {
	// checking if projectDir is inside existing git repo
	const child = spawn.sync("git rev-parse --is-inside-work-tree", { cwd: root, stdio: "ignore" });
	if (child.status === 0) {
		return true;
	}
	return false;
}

export default async function gitInit(root: string) {
	const res = await confirm({
		message: "🌿 Initialize a new git repository?",
		initialValue: true,
	});
	if (res) {
		const testGit = spawn.sync("git --version", { cwd: root, stdio: "ignore" });
		if (testGit.status === 0) {
			try {
				if (isInGitRepository(root)) {
					log.error(
						`Project directory ${kleur.cyan(
							`'./${baseName(root)}'`
						)} is inside existing Git repository`
					);
					return;
				}
				spawn.sync(`git init`, {
					cwd: root,
					stdio: "ignore",
				});
				spawn.sync(`git add -A`, { cwd: root, stdio: "ignore" });
				spawn.sync(`git commit -m "✨ Initial commit form Nodeup"`, {
					cwd: root,
					stdio: "ignore",
				});
				log.success(kleur.green("Git initialized"));
			} catch (_) {
				log.error(kleur.red("Error while initializing git"));
			}
		} else {
			log.error(kleur.red("'git' is not recognized as an internal or external command"));
		}
	}
	if (isCancel(res)) {
		cancel("Operation cancelled.");
	}
}
