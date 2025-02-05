import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';
import {ContactCardComponent} from '@thomas-ghys.eu/contact-ui';
import {ContactStore} from '@thomas-ghys.eu/common-data';

@Component({
	selector: 'lib-contact',
	standalone: true,
	imports: [CommonModule, BreakpointDirective, ContactCardComponent],
	providers: [ContactStore],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss'
})
export class ContactComponent {
	readonly store = inject(ContactStore);

	public openEmailClient() {
		window.location.href =
			'mailto:' +
			this.store.email() +
			'?subject=Contact request for a custom wild safari experience';
	}

	public openPhoneClient() {
		window.location.href = 'tel:' + this.store.mobile();
	}

	public openInstagramClient() {
		window.open(
			'https://www.instagram.com/' + this.store.instagram(),
			'_blank'
		);
	}
}
