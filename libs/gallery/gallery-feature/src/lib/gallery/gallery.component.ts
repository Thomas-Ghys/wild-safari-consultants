import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';
import {GalleryCarrouselComponent} from '@thomas-ghys.eu/gallery-ui';
import {GalleryItem} from '@thomas-ghys.eu/gallery-data';

@Component({
	selector: 'lib-gallery',
	imports: [
		CommonModule,
		FeatureContainerComponent,
		GalleryCarrouselComponent
	],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
	public galleryImages: GalleryItem[] = [
		{
			itemType: 'image',
			itemData: 'safari/closeup_elephant.jpeg',
			itemAlt: 'safari/closeup_elephant.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/giraffe.jpeg',
			itemAlt: 'safari/giraffe.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/giraffe_and_zebras.jpeg',
			itemAlt: 'safari/giraffe_and_zebras.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/herd_of_elephants.jpeg',
			itemAlt: 'safari/herd_of_elephants.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/hot_air_balloons.jpeg',
			itemAlt: 'safari/hot_air_balloons.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/leopard_in_tree.jpeg',
			itemAlt: 'safari/leopard_in_tree.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/leopard_walking.jpeg',
			itemAlt: 'safari/leopard_walking.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/lightning.jpeg',
			itemAlt: 'safari/lightning.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/lions_roaring.jpeg',
			itemAlt: 'safari/lions_roaring.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/wildebeests.jpeg',
			itemAlt: 'safari/wildebeests.jpeg'
		},
		{
			itemType: 'image',
			itemData: 'safari/zebras.jpeg',
			itemAlt: 'safari/zebras.jpeg'
		}
	];
}
