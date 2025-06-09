import type { User } from '@/misskey/user.js';

export type Note = {
	id: string;
	text: string | null;
	reply: any | null;
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