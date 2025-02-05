import {
	Component,
	input,
	InputSignal,
	output,
	OutputEmitterRef
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';

@Component({
	selector: 'lib-contact-card',
	imports: [
		CommonModule,
		BreakpointDirective,
		OverlayModule,
		CdkCopyToClipboard
	],
	templateUrl: './contact-card.component.html',
	styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
	public fullscreenQRCodeIsOpen = false;
	public contactCardIcon: InputSignal<string> = input.required<string>();
	public contactCardPrefix: InputSignal<string> = input.required<string>();
	public contactCardData: InputSignal<string> = input.required<string>();
	public qrCode: InputSignal<string> = input<string>('');
	public OpenLink: OutputEmitterRef<void> = output<void>();

	public toggleOverlay() {
		this.fullscreenQRCodeIsOpen = !this.fullscreenQRCodeIsOpen;
	}

	public OpenInNew() {
		this.OpenLink.emit();
	}
}
