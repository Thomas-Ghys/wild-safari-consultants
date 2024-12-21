export type GalleryItem = {
	itemType: ItemType,
	itemData: string,
	itemAlt: string,
}

export type ItemType =
	'image' |
	'video' |
	'youtube';


