import path from "path";
import fs from "fs";

export default async function patchPackageJson(root: string) {
	const projName = path.basename(root);
	const packageJsonPath = path.join(root, "package.json");

	const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
	pkg.name = projName;
	fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, "\t") + "\n");
}
