import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';
import { BreakpointDirective } from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-about',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent, BreakpointDirective],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss',
})
export class AboutComponent {}
