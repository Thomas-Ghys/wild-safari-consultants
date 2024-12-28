import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafariCardComponent } from './safari-card.component';

describe('SafariCardComponent', () => {
	let component: SafariCardComponent;
	let fixture: ComponentFixture<SafariCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SafariCardComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SafariCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
