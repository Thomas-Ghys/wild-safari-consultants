import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';

@Component({
	selector: 'lib-about',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss'
})
export class AboutComponent {}
