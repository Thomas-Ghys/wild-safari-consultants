import {signalStore, withState} from '@ngrx/signals';

export type ContactStore = {
	mobile: string;
	instagram: string;
	email: string;
};

const initialContactState: ContactStore = {
	mobile: '+27631751299',
	instagram: 'wildsafari.consultants',
	email: 'botserakganya05@gmail.com'
};

export const ContactStore = signalStore(
	withState(initialContactState)
);
