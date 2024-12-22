import {
	Component,
	computed,
	input,
	InputSignal,
	Signal,
	signal,
	WritableSignal
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryItem} from '@thomas-ghys.eu/gallery-data';
import {GalleryImageComponent} from '../gallery-image/gallery-image.component';
import {GalleryThumbnailsComponent} from '../gallery-thumbnails/gallery-thumbnails.component';

@Component({
	selector: 'lib-gallery-carrousel',
	imports: [CommonModule, GalleryImageComponent, GalleryThumbnailsComponent],
	templateUrl: './gallery-carrousel.component.html',
	styleUrl: './gallery-carrousel.component.scss'
})
export class GalleryCarrouselComponent {
	public galleryItems: InputSignal<GalleryItem[]> =
		input.required<GalleryItem[]>();
	public galleryActiveIndex: WritableSignal<number> = signal<number>(0);
	public activeImage: Signal<GalleryItem> = computed(() => {
		return this.galleryItems()[this.galleryActiveIndex()];
	});

	constructor() {
		setInterval(() => {
			if (this.galleryActiveIndex() < this.galleryItems().length - 1) {
				this.galleryActiveIndex.set(this.galleryActiveIndex() + 1);
				return;
			}
			this.galleryActiveIndex.set(0);
		}, 5000);
	}

	public nextItem() {
		if (this.galleryActiveIndex() < this.galleryItems().length - 1) {
			this.galleryActiveIndex.set(this.galleryActiveIndex() + 1);
		}
	}

	public previousItem() {
		if (this.galleryActiveIndex() > 0) {
			this.galleryActiveIndex.set(this.galleryActiveIndex() - 1);
		}
	}

	public navigateToItem(index: number) {
		this.galleryActiveIndex.set(index);
	}
}
