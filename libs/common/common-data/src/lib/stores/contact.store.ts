import {signalStore, withState} from '@ngrx/signals';

export type ContactStore = {
	mobile: string;
};

const initialContactState: ContactStore = {
	mobile: '+27631751299'
};

export const ContactStore = signalStore(
	withState(initialContactState)
);
