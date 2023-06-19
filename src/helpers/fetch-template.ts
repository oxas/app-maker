import { createWriteStream } from "fs";
import got from "got";
import { tmpdir } from "os";
import { join } from "path";
import { Stream } from "stream";
import tar from "tar";
import fs from "fs";
import { promisify } from "util";
import { cancel, isCancel, log, spinner } from "@clack/prompts";
import kleur from "kleur";
import { GIT_USER_NAME } from "../utils/const";
import Framework from "../types/framework";

const pipeline = promisify(Stream.pipeline);

async function downloadTar(url: string) {
	const tempFile = join(tmpdir(), `nodeup.temp-${Date.now()}`);
	await pipeline(got.stream(url), createWriteStream(tempFile));
	return tempFile;
}

async function downloadAndExtractRepo(root: string, framework: string, template: string) {
	const url = `https://codeload.github.com/${GIT_USER_NAME}/${framework}/tar.gz/main`;
	const tempFile = await downloadTar(url);
	await tar.x({
		file: tempFile,
		cwd: root,
		strip: 2,
		filter: (p) => p.includes(`${framework}-main/${template}/`),
	}); // how many paths for last do you wanna skip
	fs.unlink(tempFile, () => {});
}

async function checkResponse(framework: string, template: string): Promise<boolean> {
	const res = await got(
		`https://api.github.com/repos/${GIT_USER_NAME}/${framework}/contents/${template}`
	).catch((e) => e);
	if (res.statusCode === 200) {
		return true;
	}
	return false;
}

export default async function fetchTemplate(root: string, framework: string, template: string) {
	// Checking repo exist and internet connection too
	const resOk = await checkResponse(framework, template);
	if (resOk) {
		const s = spinner();
		s.start("Downloading files...");

		await downloadAndExtractRepo(root, framework, template);
		s.stop("Download completed");
		if (isCancel(s)) {
			cancel("Operation cancelled.");
			process.exit();
		}
	} else {
		log.error(kleur.red("Error while connecting to GitHub"));
		process.exit();
	}
}
