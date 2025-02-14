import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
	selector: 'lib-welcome',
	standalone: true,
	imports: [CommonModule, NgOptimizedImage],
	templateUrl: './welcome.component.html',
	styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {}
