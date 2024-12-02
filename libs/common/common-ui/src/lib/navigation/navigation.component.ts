import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationItemComponent} from '../navigation-item/navigation-item.component';
import {RoutingService} from '@wild-safari-consultants/common-utils';

@Component({
	selector: 'lib-navigation',
	standalone: true,
	imports: [CommonModule, NavigationItemComponent],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

	constructor(private routingService: RoutingService) {}

	navigateToRoute(route: string) {
		this.routingService.navigateToRoute(route);
	}

	currentRoute(): string {
		return this.routingService.getCurrentRoute().split('/')[1];
	}
}
