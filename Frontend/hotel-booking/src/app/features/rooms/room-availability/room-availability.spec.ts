import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAvailability } from './room-availability';

describe('RoomAvailability', () => {
  let component: RoomAvailability;
  let fixture: ComponentFixture<RoomAvailability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomAvailability],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomAvailability);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
