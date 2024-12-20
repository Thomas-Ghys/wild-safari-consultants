import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeSwitcherComponent} from '../theme-switcher/theme-switcher.component';
import {
	BreakpointDirective,
	RoutingService
} from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-top-bar',
	standalone: true,
	imports: [CommonModule, ThemeSwitcherComponent, BreakpointDirective],
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
	constructor(private routingService: RoutingService) {}

	public navigateToHome() {
		this.routingService.navigateToRoute('home');
	}
}
