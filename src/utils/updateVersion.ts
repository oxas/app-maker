import spawn from "cross-spawn";
import { homedir } from "os";

export default async function Update() {
	spawn.sync("npm", ["update", "@oxas/appmaker"], { stdio: "inherit" });
}
