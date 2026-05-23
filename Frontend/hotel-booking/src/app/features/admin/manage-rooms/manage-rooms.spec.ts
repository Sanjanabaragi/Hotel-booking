import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoomsComponent } from './manage-rooms';

describe('ManageRooms', () => {
  let component: ManageRoomsComponent;
  let fixture: ComponentFixture<ManageRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRoomsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageRoomsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
