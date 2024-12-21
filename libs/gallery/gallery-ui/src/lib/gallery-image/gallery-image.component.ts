import {
	Component,
	input,
	InputSignal,
	output,
	OutputEmitterRef
} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'lib-gallery-image',
	imports: [CommonModule],
	templateUrl: './gallery-image.component.html',
	styleUrl: './gallery-image.component.scss'
})
export class GalleryImageComponent {
	activeImageIndex: InputSignal<number> = input.required<number>();
	totalImages: InputSignal<number> = input.required<number>();
	activeImage: InputSignal<string> = input.required<string>();
	activeImageAlt: InputSignal<string> = input.required<string>();
	backButtonClicked: OutputEmitterRef<void> = output<void>();
	nextButtonClicked: OutputEmitterRef<void> = output<void>();
}
