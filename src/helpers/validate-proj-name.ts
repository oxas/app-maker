import validateProjectName from "validate-npm-package-name";

export default function validateProjName(name: string): { valid: boolean; problems?: string[] } {
	const validation = validateProjectName(name);
	if (validation.validForNewPackages) {
		return { valid: true };
	}
	return {
		valid: false,
		problems: [...(validation.errors || []), ...(validation.warnings || [])],
	};
}
