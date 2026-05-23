import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAmenities } from './manage-amenities';

describe('ManageAmenities', () => {
  let component: ManageAmenities;
  let fixture: ComponentFixture<ManageAmenities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAmenities],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageAmenities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
