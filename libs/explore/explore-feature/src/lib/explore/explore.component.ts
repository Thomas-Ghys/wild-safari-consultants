import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';
import {SafariCardComponent} from '@thomas-ghys.eu/explore-ui';
import {SafariCardDescriptionDirective} from '@thomas-ghys.eu/explore-utils';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-explore',
	standalone: true,
	imports: [
		CommonModule,
		FeatureContainerComponent,
		SafariCardComponent,
		SafariCardDescriptionDirective,
		BreakpointDirective
	],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss'
})
export class ExploreComponent {}
