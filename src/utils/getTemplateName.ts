type Response = string | null | boolean;
export default (responses: Response[]) => {
	const newResList: string[] = [];
	responses.map((v) => {
		if (v !== "" && v !== null && v !== false && v !== true) {
			newResList.push(v);
		}
	});
	return newResList.join("-");
};
