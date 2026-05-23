import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHotelsComponent } from './manage-hotels';

describe('ManageHotelsComponent', () => {
  let component: ManageHotelsComponent;
  let fixture: ComponentFixture<ManageHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageHotelsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageHotelsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
