import {Component, contentChild, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafariCardDescriptionDirective} from '@thomas-ghys.eu/explore-utils';

@Component({
	selector: 'lib-safari-card',
	imports: [CommonModule],
	templateUrl: './safari-card.component.html',
	styleUrl: './safari-card.component.scss'
})
export class SafariCardComponent {
	public title = input.required<string>();
	public subTitle = input.required<string>();
	public safariPackageDescription = contentChild.required(
		SafariCardDescriptionDirective
	);
}
