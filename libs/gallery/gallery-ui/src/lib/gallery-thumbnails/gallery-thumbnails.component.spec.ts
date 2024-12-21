import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryThumbnailsComponent } from './gallery-thumbnails.component';

describe('GalleryThumbnailsComponent', () => {
	let component: GalleryThumbnailsComponent;
	let fixture: ComponentFixture<GalleryThumbnailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [GalleryThumbnailsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(GalleryThumbnailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
