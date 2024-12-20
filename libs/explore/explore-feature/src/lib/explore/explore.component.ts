import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';

@Component({
	selector: 'lib-explore',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss'
})
export class ExploreComponent {}
