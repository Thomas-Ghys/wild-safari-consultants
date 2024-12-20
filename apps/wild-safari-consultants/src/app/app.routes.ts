import {Route} from '@angular/router';

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
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	}
];
