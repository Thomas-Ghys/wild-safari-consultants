import {Route} from '@angular/router';
import {Page404Component} from '@thomas-ghys.eu/common-ui';

export const appRoutes: Route[] = [
	{
		path: 'home',
		loadChildren: () => import('@thomas-ghys.eu/home-feature').then(
			(route) => route.homeRoutes
		)
	},
	{
		path: 'about-us',
		loadChildren: () => import('@thomas-ghys.eu/about-feature').then(
			(route) => route.aboutRoutes
		)
	},
	{
		path: 'safaris',
		loadChildren: () => import('@thomas-ghys.eu/explore-feature').then(
			(route) => route.exploreRoutes
		)
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: '**',
		component: Page404Component
	}
];
