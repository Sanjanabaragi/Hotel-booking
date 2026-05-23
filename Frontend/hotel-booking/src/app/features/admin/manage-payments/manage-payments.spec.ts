import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePaymentsComponent } from './manage-payments';

describe('ManagePaymentsComponent', () => {
  let component: ManagePaymentsComponent;
  let fixture: ComponentFixture<ManagePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePaymentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagePaymentsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
