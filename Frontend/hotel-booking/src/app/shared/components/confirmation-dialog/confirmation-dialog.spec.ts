import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationDialogComponent } from './confirmation-dialog';
import { EventEmitter } from '@angular/core';

describe('ConfirmationDialogComponent', () => {

  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ConfirmationDialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationDialogComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create confirmation dialog', () => {

    expect(component).toBeTruthy();

  });

  it('should emit confirm event', () => {

    const emitSpy = spyOn(component.confirmed, 'emit');

    component.onConfirm();

    expect(emitSpy).toHaveBeenCalled();

  });

  it('should emit cancel event', () => {

    const emitSpy = spyOn(component.cancelled, 'emit');

    component.onCancel();

    expect(emitSpy).toHaveBeenCalled();

  });

});

function spyOn(confirmed: EventEmitter<void>, arg1: string) {
  throw new Error('Function not implemented.');
}
