import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GalleryCarrouselComponent } from "./gallery-carrousel.component";

describe("GalleryCarrouselComponent", () => {
	let component: GalleryCarrouselComponent;
	let fixture: ComponentFixture<GalleryCarrouselComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [GalleryCarrouselComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(GalleryCarrouselComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
