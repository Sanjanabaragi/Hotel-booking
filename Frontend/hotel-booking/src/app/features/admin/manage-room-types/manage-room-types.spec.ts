import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoomTypesComponent } from './manage-room-types';

describe('ManageRoomTypesComponent', () => {
  let component: ManageRoomTypesComponent;
  let fixture: ComponentFixture<ManageRoomTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRoomTypesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageRoomTypesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
