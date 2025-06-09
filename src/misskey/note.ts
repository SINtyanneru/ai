import type { User } from '@/misskey/user.js';

export type Note = {
	id: string;
	text: string | null;
	reply: any | null;
	userId: string;
	user: User;
	cw: string | null;
	poll?: {
		choices: {
			votes: number;
			text: string;
		}[];
		expiredAfter: number;
		multiple: boolean;
	} | null;
};

export type NoteCreate = {
	createdNote: Note;
};