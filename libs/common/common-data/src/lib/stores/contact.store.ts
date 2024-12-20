import {signalStore, withState} from '@ngrx/signals';

export type ContactStore = {
	mobile: string;
	instagram: string;
};

const initialContactState: ContactStore = {
	mobile: '+27631751299',
	instagram: '@wildsafari.consultants'
};

export const ContactStore = signalStore(
	withState(initialContactState)
);
