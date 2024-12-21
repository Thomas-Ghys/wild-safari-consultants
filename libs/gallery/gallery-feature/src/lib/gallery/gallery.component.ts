import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';

@Component({
	selector: 'lib-gallery',
	imports: [CommonModule, FeatureContainerComponent, NgOptimizedImage],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
	public galleryImages: string[] = [
		'safari/closeup_elephant.jpeg',
		'safari/giraffe.jpeg',
		'safari/giraffe_and_zebras.jpeg',
		'safari/herd_of_elephants.jpeg',
		'safari/hot_air_balloons.jpeg',
		'safari/leopard_in_tree.jpeg',
		'safari/leopard_walking.jpeg',
		'safari/lightning.jpeg',
		'safari/lions_roaring.jpeg',
		'safari/wildebeests.jpeg',
		'safari/zebras.jpeg'
	];
}
