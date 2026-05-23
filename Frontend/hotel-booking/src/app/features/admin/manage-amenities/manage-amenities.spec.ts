import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAmenitiesComponent } from './manage-amenities';

describe('ManageAmenitiesComponent', () => {
  let component: ManageAmenitiesComponent;
  let fixture: ComponentFixture<ManageAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAmenitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageAmenitiesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
