import path from "path";

export default (root: string): string => {
	return path.basename(root);
};
