import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cancellations } from './cancellations';

describe('Cancellations', () => {
  let component: Cancellations;
  let fixture: ComponentFixture<Cancellations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cancellations],
    }).compileComponents();

    fixture = TestBed.createComponent(Cancellations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
