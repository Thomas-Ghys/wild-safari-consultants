import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';
import {
	EmailContactCardComponent,
	QrContactCardComponent
} from '@thomas-ghys.eu/contact-ui';
import {ContactStore} from '@thomas-ghys.eu/common-data';

@Component({
	selector: 'lib-contact',
	standalone: true,
	imports: [
		CommonModule,
		FeatureContainerComponent,
		BreakpointDirective,
		QrContactCardComponent,
		EmailContactCardComponent
	],
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
}
