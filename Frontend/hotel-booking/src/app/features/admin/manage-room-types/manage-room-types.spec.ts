import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoomTypes } from './manage-room-types';

describe('ManageRoomTypes', () => {
  let component: ManageRoomTypes;
  let fixture: ComponentFixture<ManageRoomTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRoomTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageRoomTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
