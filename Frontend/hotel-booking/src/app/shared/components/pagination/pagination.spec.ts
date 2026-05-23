import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { PaginationComponent }
from './pagination';

describe('PaginationComponent', () => {

  let component: PaginationComponent;

  let fixture:
    ComponentFixture<PaginationComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [
        PaginationComponent
      ]

    }).compileComponents();

    fixture =
      TestBed.createComponent(
        PaginationComponent
      );

    component =
      fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component)
      .toBeTruthy();

  });

  it('should move to next page', () => {

    component.currentPage = 1;

    component.totalPages = 5;

    const emitSpy =
      spyOn(
        component.pageChanged,
        'emit'
      );

    component.nextPage();

    expect(component.currentPage)
      .toBe(2);

    expect(emitSpy)
      .toHaveBeenCalledWith(2);

  });

  it('should move to previous page', () => {

    component.currentPage = 3;

    const emitSpy =
      spyOn(
        component.pageChanged,
        'emit'
      );

    component.previousPage();

    expect(component.currentPage)
      .toBe(2);

    expect(emitSpy)
      .toHaveBeenCalledWith(2);

  });

  it('should go to selected page', () => {

    component.totalPages = 5;

    const emitSpy =
      spyOn(
        component.pageChanged,
        'emit'
      );

    component.goToPage(4);

    expect(component.currentPage)
      .toBe(4);

    expect(emitSpy)
      .toHaveBeenCalledWith(4);

  });

});