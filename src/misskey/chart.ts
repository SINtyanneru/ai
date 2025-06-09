export type ChartNotes = {
	local: {
		total: number[];
		inc: number[];
		dec: number[];
		diffs: {
			normal: number[];
			reply: number[];
			renote: number[];
			withFile: number[];
		};
	};
	remote: {
		total: number[];
		inc: number[];
		dec: number[];
		diffs: {
			normal: number[];
			reply: number[];
			renote: number[];
			withFile: number[];
		};
	};
};

export type ChartUserNote = {
	total: number[];
	inc: number[];
	dec: number[];
	diffs: {
		normal: number[];
		reply: number[];
		renote: number[];
		withFile: number[];
	}
};

export type ChartFollowing = {
	local: {
		followings: {
			total: number[];
			inc: number[];
			dec: number[];
		};
		followers: {
						total: number[];
			inc: number[];
			dec: number[];
		};
	};
	remote: {
		followings: {
			total: number[];
			inc: number[];
			dec: number[];
		};
		followers: {
			total: number[];
			inc: number[];
			dec: number[];
		};
	};
};