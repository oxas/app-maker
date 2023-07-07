import spawn from "cross-spawn";

export default function runInstall(root: string, pm: string): boolean {
	let child;
	if (pm == "yarn") {
		spawn.sync("touch", ["yarn.lock"], { cwd: root, stdio: "ignore" });
		child = spawn.sync(pm, [], { cwd: root, stdio: "inherit" });
	} else {
		child = spawn.sync(pm, ["install"], { cwd: root, stdio: "inherit" });
	}
	if (child.status !== 0) {
		return false;
	} else {
		return true;
	}
}
