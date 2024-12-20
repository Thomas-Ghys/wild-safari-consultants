import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';
import {WelcomeComponent} from '@thomas-ghys.eu/home-ui';

@Component({
	selector: 'lib-home',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent, WelcomeComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {}
