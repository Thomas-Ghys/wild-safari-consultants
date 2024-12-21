import {
	Component,
	computed,
	input,
	InputSignal,
	output,
	OutputEmitterRef,
	Signal,
	signal,
	WritableSignal
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryItem} from '@thomas-ghys.eu/gallery-data';

@Component({
	selector: 'lib-gallery-thumbnails',
	imports: [CommonModule],
	templateUrl: './gallery-thumbnails.component.html',
	styleUrl: './gallery-thumbnails.component.scss'
})
export class GalleryThumbnailsComponent {
	public galleryItems: InputSignal<GalleryItem[]> =
		input.required<GalleryItem[]>();
	public galleryActiveIndex: InputSignal<number> = input.required<number>();
	public numbVisibleItems: InputSignal<number> = input<number>(5);
	public startVisibleItemsIndex: WritableSignal<number> = signal(0);
	public endVisibleItemsIndex: Signal<number> = computed(
		() => this.startVisibleItemsIndex() + this.numbVisibleItems()
	);
	public visibleGalleryItems: Signal<GalleryItem[]> = computed(() => {
		return this.galleryItems().slice(
			this.startVisibleItemsIndex(),
			this.endVisibleItemsIndex()
		);
	});
	public navigateToGalleryItem: OutputEmitterRef<number> = output<number>();

	public backButtonClicked() {
		this.startVisibleItemsIndex.set(this.startVisibleItemsIndex() - 1);
	}

	public nextButtonClicked() {
		this.startVisibleItemsIndex.set(this.startVisibleItemsIndex() + 1);
	}

	public getIndex(item: GalleryItem): number {
		return this.galleryItems().findIndex(
			(galleryItem: GalleryItem): boolean => galleryItem.itemData === item.itemData
		);
	}
}
